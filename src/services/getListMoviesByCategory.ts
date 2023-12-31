import { UnexpectedError } from "../errors";
import { GetMovieListByCategoryApiResponse, GetMovieListByCategoryApiResponseType, ListMoviesCategoryParams } from "../types&enums/movieListByCategory.types";
import { baseMoviesUrl } from "../urls/movies";
import { request } from "../http/request";
import { HttpMethods, HttpStatusCodes } from "../types&enums/http.types";

export const getListMoviesByCategory: GetMovieListByCategoryApiResponseType = async ({ movieListCategory, page}:ListMoviesCategoryParams) => {
    const params = {
        page: page,
    };

    const response  = await request<GetMovieListByCategoryApiResponse>({
    url: `${baseMoviesUrl}${movieListCategory}/movies`,
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
