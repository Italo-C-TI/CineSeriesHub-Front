import { MovieByDetailsInterface } from "./movies.types";

export interface GetMovieByIdParams {
    id: number;
}

export interface GetMovieByIdApiResponse {
    movie: MovieByDetailsInterface;
  }

export type GetMovieByIdApiResponseType = ({ id }: GetMovieByIdParams) => Promise<GetMovieByIdApiResponse>;