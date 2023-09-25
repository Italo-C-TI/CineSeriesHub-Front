import { QueryObserverResult } from "react-query";
import { MovieByListInterface } from "./movies.types";

export enum MovieListCategoryEnum {
    NOW_PLAYING = "now_playing",
    TOP_RATED = "top_rated",
    POPULAR = "popular",
    UNKNOWN = "unknown"
}
  
export type MovieListCategoryType = Lowercase<keyof typeof MovieListCategoryEnum>;

export interface ListMoviesCategoryParams {
    movieListCategory: MovieListCategoryType;
    page?: number;
  }

  
  type MoviesHookReturn = {
    results: MovieByListInterface[];
    page: number;
    total_pages:number;
    isSuccess: boolean,
    refetch:() => Promise<QueryObserverResult<GetMovieListByCategoryApiResponse, unknown>>;
  };

export type UseListMoviesByCategory = ({ movieListCategory, page }: ListMoviesCategoryParams) => MoviesHookReturn;

export interface GetMovieListByCategoryApiResponse {
  movies: MoviesInterface;
}

export interface MoviesInterface{
    results: MovieByListInterface[],
    page: number,
    total_pages: number
}

export type GetMovieListByCategoryApiResponseType = ({ movieListCategory, page}:ListMoviesCategoryParams) => Promise<GetMovieListByCategoryApiResponse>;

