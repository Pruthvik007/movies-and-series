import { ID_PLACEHOLDER } from "../helpers/Constants";
import { fetchApi } from "../helpers/Fetch";
import {
  CategoryMediaParamsType,
  Genre,
  Movie,
  MovieDetails,
  Response,
  SearchMediaParamsType,
  Show,
  ShowDetails,
  VideosResponse,
} from "../types/TmdbTypes";

class TmdbServices {
  getMedia(
    endPoint: string,
    params?: CategoryMediaParamsType
  ): Promise<Response<Movie | Show>> {
    if (!params) {
      return fetchApi<Response<Movie | Show>>(endPoint);
    } else {
      const queries = new URLSearchParams(
        Object.entries(params).filter(
          (q) => q[1] !== null && q[1] !== undefined && q[1] !== ""
        )
      ).toString();
      return fetchApi<Response<Movie | Show>>(endPoint + "?" + queries);
    }
  }
  getMediaDetails(
    endPoint: string,
    id: string
  ): Promise<MovieDetails | ShowDetails> {
    return fetchApi<MovieDetails | ShowDetails>(`${endPoint}${id}`);
  }
  getMediaSearchResults(
    endPoint: string,
    params: SearchMediaParamsType
  ): Promise<Response<Movie | Show>> {
    const queries = new URLSearchParams(
      Object.entries(params).filter(
        (q) => q[1] !== null && q[1] !== undefined && q[1] !== ""
      )
    ).toString();
    return fetchApi<Response<Movie | Show>>(endPoint + "?" + queries);
  }
  getMediaRecomendations(
    endPoint: string,
    id: string
  ): Promise<Response<Movie | Show>> {
    return fetchApi<Response<Movie | Show>>(
      `${endPoint.replace(ID_PLACEHOLDER, id.toString())}`
    );
  }

  getGenres(endPoint: string) {
    return fetchApi<{ genres: Genre[] }>(endPoint);
  }

  getVideos(endPoint: string, id: string) {
    return fetchApi<VideosResponse>(`${endPoint.replace(ID_PLACEHOLDER, id)}`);
  }
}
export default new TmdbServices();
