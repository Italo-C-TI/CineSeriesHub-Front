import { UnexpectedError } from "../errors";
import { baseMoviesUrl } from "../urls/movies";
import { request } from "../http/request";
import { HttpMethods, HttpStatusCodes } from "../types&enums/http.types";
import { GetMovieByIdApiResponse, GetMovieByIdApiResponseType, GetMovieByIdParams } from "../types&enums/movieById.types";


export const getMovieById: GetMovieByIdApiResponseType = async ({ id }: GetMovieByIdParams) => {

    const response  = await request<GetMovieByIdApiResponse>({
    url: `${baseMoviesUrl}movie/${id}`,
    method: HttpMethods.GET
    });    

  switch (response.status) {
    case HttpStatusCodes.OK:
      return response.body;
    default:
      throw new UnexpectedError();
  }
};
