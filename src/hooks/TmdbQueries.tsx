import { useInfiniteQuery, useQuery } from "react-query";
import {
  CONSTANTS,
  CategoryType,
  END_POINT_OF,
  END_POINT_OF_MEDIA_OF_CATEGORY,
} from "../helpers/Constants";
import TmdbServices from "../services/TmdbServices";
import {
  CategoryMediaParamsType,
  MediaType,
  SearchMediaParamsType,
} from "../types/TmdbTypes";

export const useSampleMedia = (
  mediaType: MediaType,
  category: CategoryType
) => {
  return useQuery(
    [`${mediaType}-${category}`, category],
    () =>
      TmdbServices.getMedia(
        END_POINT_OF_MEDIA_OF_CATEGORY[mediaType][category]
      ),
    {
      keepPreviousData: true,
    }
  );
};

export const useInfiniteMedia = (
  mediaType: MediaType,
  category: CategoryType,
  params: CategoryMediaParamsType
) => {
  return useInfiniteQuery({
    queryKey: [`${mediaType}-${category}`, mediaType, category, params],
    queryFn: ({ pageParam = 1 }) => {
      return TmdbServices.getMedia(
        END_POINT_OF_MEDIA_OF_CATEGORY[mediaType?.toUpperCase() as MediaType][
          category?.toUpperCase() as keyof typeof CONSTANTS.CATEGORIES
        ],
        {
          ...params,
          page: pageParam,
        }
      );
    },
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
};

export const useMediaDetails = (mediaType: MediaType, mediaId: string) => {
  return useQuery([`${mediaType}-details-${mediaId}`, mediaId, mediaType], () =>
    TmdbServices.getMediaDetails(
      mediaType === "MOVIES"
        ? END_POINT_OF.DETAILS_OF_MOVIE
        : END_POINT_OF.DETAILS_OF_SHOWS,
      mediaId
    )
  );
};

export const useRecommendations = (mediaType: MediaType, mediaId: string) => {
  return useQuery(
    [`${mediaType}-recomendations-${mediaId}`, mediaId, mediaType],
    () =>
      TmdbServices.getMediaRecomendations(
        mediaType === "MOVIES"
          ? END_POINT_OF.MOVIE_RECOMENDATIONS
          : END_POINT_OF.SHOW_RECOMENDATIONS,
        mediaId
      ),
    {
      keepPreviousData: false,
    }
  );
};

export const useSearchResults = (
  mediaType: MediaType,
  params: SearchMediaParamsType
) => {
  return useInfiniteQuery({
    queryKey: [`${mediaType}-search`, mediaType, params],
    queryFn: ({ pageParam = 1 }) => {
      return TmdbServices.getMediaSearchResults(
        mediaType === "MOVIES"
          ? END_POINT_OF.SEARCH_MOVIE
          : END_POINT_OF.SEARCH_SHOWS,
        { ...params, page: pageParam }
      );
    },
    enabled: params.query.length > 0,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
};

export const useGenres = (mediaType: MediaType) => {
  const endPoint =
    mediaType === "MOVIES"
      ? END_POINT_OF.GENRES_OF_MOVIES
      : END_POINT_OF.GENRES_OF_SHOWS;
  const { data, error } = useQuery([`${mediaType}-genres`], () =>
    TmdbServices.getGenres(endPoint)
  );
  if (error) return [];
  return data?.genres || [];
};

export const useVideos = (mediaType: MediaType, mediaId: string) => {
  const endPoint =
    mediaType === "MOVIES"
      ? END_POINT_OF.VIDEOS_OF_MOVIE
      : END_POINT_OF.VIDEOS_OF_SHOW;
  return useQuery([`${mediaType}-videos-${mediaId}`], () =>
    TmdbServices.getVideos(endPoint, mediaId)
  );
};