import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CONSTANTS } from "../helpers/Constants";
import { Movie, Show } from "../types/TmdbTypes";
import Skeleton from "./common/Skeleton";
type MediaCardProps = {
  media: Movie | Show;
};
const MediaCard = ({ media }: MediaCardProps) => {
  const imagePath = media.poster_path ? media.poster_path : media.backdrop_path;
  return (
    <div className="card-sm md:card-md lg:card-lg overflow-y-clip relative">
      {imagePath ? (
        <LazyLoadImage
          effect="blur"
          placeholder={<Skeleton />}
          src={CONSTANTS.ENV.TMDB_API_IMAGE_URL + imagePath}
          alt={
            (media as Movie).title
              ? (media as Movie).title
              : (media as Show).name
          }
          height="100%"
          width="100%"
        />
      ) : (
        <Skeleton />
      )}
      {media.vote_average !== 0 && (
        <div className="absolute top-1 right-1">
          <div className="badge badge-xs sm:badge-sm md:badge-md lg:badge-lg badge-neutral">
            {media.vote_average.toFixed(1)}/10
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCard;
