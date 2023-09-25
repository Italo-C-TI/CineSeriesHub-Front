import { useEffect, useState } from "react";
import { getListMoviesByCategory, getListMoviesBySearch } from "../services";
import {  MovieListCategoryEnum, MoviesInterface } from "../types&enums/movieListByCategory.types";
import { MovieCard,Search,Loading, Pagination } from "../components";
import { Page } from "../types&enums/pages.types";

export const Home = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [listMovies,setListMovies] = useState<MoviesInterface>();
  const [movieListCategory,setMovieListCategory] = useState<MovieListCategoryEnum>(MovieListCategoryEnum.NOW_PLAYING);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<Page>({current:1, total_pages: 1});


  const handleSearch = async () => {
    setIsLoading(true);
    try {
        setMovieListCategory(MovieListCategoryEnum.UNKNOWN);
        const response = await getListMoviesBySearch({search:searchQuery});
        setListMovies(response.movies);
      } catch (error) {
      console.error("Erro ao pesquisar filmes", error);
    }

    setIsLoading(false);
  };


  const onPageChange = (page: Page) => {
    try {
    setPage(page);
    getMovies(movieListCategory,page.current);
  } catch (error) {
    console.error("Erro ao mudar pagina", error);
  }

  };

  const getMovies = async (listCategory: MovieListCategoryEnum, page?: number) => {
    setIsLoading(true);
    try {
    const { movies } = await getListMoviesByCategory({movieListCategory: listCategory, page : page || 1});

    if(listCategory !== MovieListCategoryEnum.UNKNOWN){
      setListMovies(movies);
    }

    setPage({current: movies.page, total_pages:movies.total_pages});

    } catch (error) {
      console.error("Erro ao buscar filmes", error);
    }

    setIsLoading(false);

  };

  useEffect(() => {
    getMovies(movieListCategory);
  }, [movieListCategory]);

  return (
    <div className="container mx-auto p-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch}/>
      <h1 className="text-3xl font-semibold mb-4">Listas de Filmes</h1>
      <div className="flex justify-evenly	 flex-wrap	gap-y-2	">
        <button
          className={`mr-4 ${movieListCategory === MovieListCategoryEnum.NOW_PLAYING ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} py-2 px-7 rounded`}
          onClick={() => setMovieListCategory(MovieListCategoryEnum.NOW_PLAYING)}
        >
         Nos Cinemas
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
          Mais Populares
        </button>

      </div>

      <div className="flex items-center justify-center min-h-screen">
      {isLoading ? <Loading /> :      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listMovies && listMovies.results && listMovies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>}

    </div>
    { movieListCategory!== MovieListCategoryEnum.UNKNOWN && listMovies?.page && 
        <div className="flex justify-center">
          <Pagination page={{ current: page.current, total_pages: listMovies.total_pages }} setPage={setPage} onPageChange={onPageChange} />
        </div>
      }
  </div>
  )
}
