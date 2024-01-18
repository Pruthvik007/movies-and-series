import { Link } from "react-router-dom";
import { MediaType, Movie, Show } from "../types/TmdbTypes";
import MediaCard from "./MediaCard";
import Skeleton from "./common/Skeleton";

const MediaList = ({
  mediaList,
  mediaType,
  isLoading,
}: {
  mediaList: (Movie | Show)[] | undefined;
  mediaType: MediaType;
  isLoading: boolean;
}) => {
  return (
    <>
      {mediaList?.map((media) => (
        <Link to={`/details/${mediaType}/${media.id}`} key={media.id}>
          <MediaCard media={media} />
        </Link>
      ))}
      {isLoading && <Skeleton count={20} />}
    </>
  );
};

export default MediaList;
