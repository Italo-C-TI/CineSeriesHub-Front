import { UnexpectedError } from "../errors";
import { searchMoviesUrl } from "../urls/movies";
import { request } from "../http/request";
import { HttpMethods, HttpStatusCodes } from "../types&enums/http.types";
import { GetMovieListBySearchApiResponse, GetMovieListBySearchApiResponseType, ListMoviesSearchParams } from "../types&enums/movieListBySearch.types";

export const getListMoviesBySearch: GetMovieListBySearchApiResponseType = async ({ search, page}: ListMoviesSearchParams) => {
    const params = {
        page: page || 1,
        search
    };

    const response  = await request<GetMovieListBySearchApiResponse>({
    url: searchMoviesUrl,
    method: HttpMethods.GET,
    params
    });    

  switch (response.status) {
    case HttpStatusCodes.OK:
      return response.body;
    default:
      throw new UnexpectedError();
  }
};
