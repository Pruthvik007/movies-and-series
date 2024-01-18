import { CONSTANTS } from "./Constants";

export async function fetchApi<T>(
  url = "",
  methodType = "GET",
  data = undefined
): Promise<T> {
  const completeUrl = new URL(CONSTANTS.ENV.TMDB_API_BASE_URL + url);
  completeUrl.searchParams.set("api_key", CONSTANTS.ENV.TMDB_API_KEY);
  const response = await fetch(completeUrl, {
    method: methodType,
    body: JSON.stringify(data),
  });
  return response.json() as T;
}

export const METHOD_TYPE = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};
