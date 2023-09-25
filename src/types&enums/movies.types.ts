export interface MovieByListInterface  {
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
  results: MovieByListInterface[];
  page: number;
  total_pages:number;
}

export interface MovieParams  {
  id:string;
}

export interface MovieByDetailsInterface  {
  id: number;
  budget:number;
  overview:string;
  title:string;
  poster_path:string;
  backdrop_path:string;
  genres: GenresMovie[],
  production_companies: ProductionCompanies[],
  release_date:string;
}

interface GenresMovie {
  id:number,
  name:string;
}
interface ProductionCompanies {
  id: number,
  logo_path: string,
  name: string,
  origin_country:string
}

