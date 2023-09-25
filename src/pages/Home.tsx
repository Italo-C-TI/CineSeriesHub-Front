import { useEffect, useState } from "react";
import { getListMoviesByCategory } from "../services";
import {  MovieListCategoryEnum, MoviesInterface } from "../types&enums/movieListByCategory.types";
import { MovieCard,Search,Loading } from "../components";

export const Home = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [popularMovies,setPopular] = useState<MoviesInterface>();
  const [topRatedMovies,setTopRatedMovies] = useState<MoviesInterface>();
  const [nowPlayingMovies,setNowPlayingMovies] = useState<MoviesInterface>();
  const [listMovies,setListMovies] = useState<MoviesInterface>();
  const [movieListCategory,setMovieListCategory] = useState<MovieListCategoryEnum>(MovieListCategoryEnum.NOW_PLAYING);


  const getMovies = async (listCategory: MovieListCategoryEnum, page?: number) => {
    setIsLoading(true);
    try {
    const { movies } = await getListMoviesByCategory({movieListCategory: listCategory, page :page || 1});
 
    setListMovies(movies);

    if( listCategory === MovieListCategoryEnum.NOW_PLAYING){
      setNowPlayingMovies(movies);
    }
    if( listCategory === MovieListCategoryEnum.TOP_RATED){
      setTopRatedMovies(movies);
    }
    if( listCategory === MovieListCategoryEnum.POPULAR){
      setPopular(movies);
    }
    setIsLoading(false);
    console.log(movies)
    } catch (error) {
      console.error("Erro ao buscar filmes", error);
    }
  };

  useEffect(() => {
    console.log(movieListCategory);
    getMovies(movieListCategory);
    console.log(listMovies);
  }, [movieListCategory]);

  return (
    <div className="container mx-auto p-4">
        <Search />
      <h1 className="text-3xl font-semibold mb-4">Listas de Filmes</h1>
      <div className="flex justify-evenly	 flex-wrap	gap-y-2	">
        <button
          className={`mr-4 ${movieListCategory === MovieListCategoryEnum.NOW_PLAYING ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} py-2 px-7 rounded`}
          onClick={() => setMovieListCategory(MovieListCategoryEnum.NOW_PLAYING)}
        >
         Nos cinemas
        </button>
        <button
          className={`mr-4 ${movieListCategory === MovieListCategoryEnum.TOP_RATED ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} py-2 px-4 rounded`}
          onClick={() => setMovieListCategory(MovieListCategoryEnum.TOP_RATED)}
        >
          Mais Avaliados
        </button>
        <button
          className={`mr-4 ${movieListCategory === MovieListCategoryEnum.POPULAR ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} py-2 px-4 rounded`}
          onClick={() => setMovieListCategory(MovieListCategoryEnum.POPULAR)}
        >
          Populares
        </button>

      </div>

      <div className="flex items-center justify-center min-h-screen">
      {isLoading ? <Loading /> :      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listMovies && listMovies.results && listMovies.results.map((movie) => (
            <MovieCard movie={movie}/>
        ))}
      </div>}
    </div>

  </div>
  )
}
