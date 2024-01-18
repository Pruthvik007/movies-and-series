import { MediaType } from "../types/TmdbTypes";

type MediaSelectorProps = {
  mediaType: MediaType;
  setMediaType: (mediaType: MediaType) => void;
};
const MediaSelector = ({ mediaType, setMediaType }: MediaSelectorProps) => {
  return (
    <div className="flex gap-2">
      <button
        className={`btn hover:btn-info btn-sm lg:btn-md ${
          mediaType === "MOVIES" ? "btn-primary" : "btn-neutral"
        }`}
        onClick={() => setMediaType("MOVIES")}
      >
        Movies
      </button>
      <button
        className={`btn hover:btn-info btn-sm lg:btn-md ${
          mediaType === "SHOWS" ? "btn-primary" : "btn-neutral"
        }`}
        onClick={() => setMediaType("SHOWS")}
      >
        Series
      </button>
    </div>
  );
};

export default MediaSelector;
