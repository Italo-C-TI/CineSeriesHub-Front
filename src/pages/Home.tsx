import { useEffect, useState } from "react";
import { getListMoviesByCategory } from "../services";
import { GetMovieListByCategoryApiResponse, MovieListCategoryEnum, MoviesInterface } from "../types&enums/movieListCategory.types";

export const Home = () => {
  const [popularMovies,setPopular] = useState([]);
  const [topRatedMovies,setTopRatedMovies] = useState([]);
  const [nowPlayingMovies,setNowPlayingMovies] = useState<MoviesInterface>();
  const [movieListCategory,setMovieListCategory] = useState<MovieListCategoryEnum>(MovieListCategoryEnum.NOW_PLAYING);


  const getMovies = async (listCategory: MovieListCategoryEnum) => {
   const { movies } = await getListMoviesByCategory({movieListCategory: listCategory, page: 1});
   if( listCategory === MovieListCategoryEnum.NOW_PLAYING){
      setNowPlayingMovies(movies);
   }

    console.log(movies)
    //setTopMovies(data.results);
  };

  useEffect(() => {
    console.log(movieListCategory);
    getMovies(movieListCategory);
    console.log(nowPlayingMovies)
    console.log(nowPlayingMovies?.page)
  }, [movieListCategory]);

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-semibold mb-4">Listas de Filmes</h1>

    {/* Navegação entre categorias */}
    <div className="mb-4">
      <button
        className={`mr-4 ${movieListCategory === MovieListCategoryEnum.NOW_PLAYING ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} py-2 px-4 rounded`}
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {nowPlayingMovies && nowPlayingMovies.results && nowPlayingMovies.results.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto mb-2"
          />
          <p className="text-gray-700">{movie.overview}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
