export interface MovieInterface  {
    id: number;
    adult: boolean;
    title: string;
    overview: string;
    poster_path:string;
    vote_average:string;
    release_date:string;
    original_title:string;
    backdrop_path:string;
    genre_ids: number[];
}
  
export interface MoviesInterface {
  results: MovieInterface[];
  page: number;
  total_pages:number;
}

export interface MovieParams  {
  id:string;
}

