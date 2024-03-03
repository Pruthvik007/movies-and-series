import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useVideos } from "../hooks/TmdbQueries";
import {
  Genre,
  MediaDetails,
  MediaType,
  MovieDetails,
  ProductionCompany,
  ShowDetails,
} from "../types/TmdbTypes";
import VideoModalContent from "./VideoModalContent";
import WatchlistButtons from "./WatchlistButtons";
import MediaProvider from "./MediaProvider";

const BasicMediaDetails = ({
  mediaType,
  mediaDetails,
}: {
  mediaType: MediaType;
  mediaDetails: MediaDetails;
}) => {
  const { openModal } = useContext(ModalContext);
  const videosData = useVideos(mediaType, mediaDetails.id.toString());
  let trailer = {
    name: "",
    id: "",
  };

  if (videosData.isSuccess) {
    const trailerData = videosData.data.results.find(
      (result) =>
        result.official &&
        result.site === "YouTube" &&
        result.type === "Trailer" &&
        result.name === "Official Trailer"
    );

    if (trailerData) {
      trailer = {
        name: trailerData.name,
        id: trailerData.key,
      };
    }
  }
  return (
    <div className="flex flex-col gap-3 bg-neutral p-3 rounded-xl max-w-full">
      <MediaTitle mediaDetails={mediaDetails} mediaType={mediaType} />
      {mediaDetails.tagline !== undefined &&
        mediaDetails.tagline.length > 0 && (
          <p className="text-md md:text-lg italic font-semibold text">
            "{mediaDetails.tagline}"
          </p>
        )}
      <div className="text-lg md:text-xl italic font-semibold text">
        <p>{mediaDetails.overview}</p>
      </div>
      <div className="flex gap-3 justify-center md:justify-start">
        <button
          onClick={() => openModal(<VideoModalContent {...trailer} />)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Play Trailer
        </button>
        <MediaProvider mediaType={mediaType} id={mediaDetails.id} />
        <WatchlistButtons mediaDetails={mediaDetails} mediaType={mediaType} />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row max-w-6xl">
        <GenresOrCompanies data={mediaDetails.genres} type="Genres" />
        <GenresOrCompanies
          data={mediaDetails.production_companies}
          type="Production Companies"
        />
      </div>
    </div>
  );
};

export default BasicMediaDetails;

const MediaTitle = ({
  mediaDetails,
  mediaType,
}: {
  mediaDetails: MediaDetails;
  mediaType: MediaType;
}) => {
  const title =
    mediaType === "movies"
      ? (mediaDetails as MovieDetails).original_title
      : (mediaDetails as ShowDetails).original_name;
  const date =
    mediaType === "movies"
      ? (mediaDetails as MovieDetails).release_date
      : (mediaDetails as ShowDetails).first_air_date;

  return (
    <p className="text-3xl text-white">
      {title} ({date.split("-")[0]})
    </p>
  );
};

const GenresOrCompanies = ({
  data,
  type,
}: {
  data: (Genre | ProductionCompany)[];
  type: "Genres" | "Production Companies";
}) => {
  return (
    <div className="flex flex-col items-center md:flex-row bg-base-100 rounded-xl p-3 gap-x-2 overflow-x-auto">
      <p className="text-xl font-bold text-white">{type}</p>
      <div
        className="flex justify-start rounded-md shadow-sm gap-2 p-2 max-w-full overflow-x-auto"
        role="group"
      >
        {data.map((item) => (
          <button
            key={item.id}
            type="button"
            className="btn btn-sm md:btn-md btn-active btn-info"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};