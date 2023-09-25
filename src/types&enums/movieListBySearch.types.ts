import { MoviesInterface } from "./movies.types";

export interface ListMoviesSearchParams {
    search: string;
    page?: number;
}

export interface GetMovieListBySearchApiResponse {
    movies: MoviesInterface;
  }

export type GetMovieListBySearchApiResponseType = ({ search, page}:ListMoviesSearchParams) => Promise<GetMovieListBySearchApiResponse>;
