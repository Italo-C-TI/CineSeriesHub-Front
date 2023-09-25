import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import { MovieByDetailsInterface } from "../types&enums/movies.types";
import { getMovieById } from "../services";
import { baseSearchMovieImgUrl } from "../urls/movies";
import { formatBudget } from "../formatters/movieFormatter";
import { brazilDateFormat } from "../formatters/global";


export const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading,setIsLoading] = useState(false);
  const [movie, setMovie] = useState<MovieByDetailsInterface>();



  const getMovie = async () => {
    setIsLoading(true);
    try {

    if(id){
        const { movie } = await getMovieById({id: parseInt(id)});
        setMovie(movie);

    }else{
        throw new Error("id do filme não fornecido");
    }
    
    } catch (error) {
      console.error("Erro ao busca filme", error);
    }

    setIsLoading(false);

  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isLoading ? <Loading /> : movie && 
      <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">{movie.title}</h1>
        <Link to="/" className="text-blue-100 hover:underline">
          Voltar à lista
        </Link>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-4">
          <p className=" mb-4">{movie.overview}</p>
          <div className="mb-4">
            <p className="font-semibold">Orçamento:</p>
            <div className="flex items-center">
            <span className="text-gray-500 text-xl mr-2">💰</span>
            <span className="text-green-500 text-xl font-bold">
                {formatBudget(movie.budget)}
            </span>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Gêneros:</p>
            <ul className="flex">
            {movie.genres && movie.genres.map((genre) => (
                <li key={genre.id} className="mb-2 my-2">
                <span className="bg-yellow-300 text-sky-800 px-6 py-1 font-semibold rounded-full inline-block mr-2">
                    {genre.name}
                </span>
                </li>
            ))}
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-semibold my-2">Data de Lançamento:</p>
            <span className=" rounded-md border-gray-300 p-1 text-lg font-semibold ">
                {brazilDateFormat(movie.release_date)}
            </span>
            
          </div>
          <div className="mb-4">
            <p className="font-semibold">Produtoras:</p>
            <ul>
                {movie.production_companies && movie.production_companies.map((company) => (
                
                <li key={company.id} className="my-2">
                    - <span className="border rounded-md border-gray-300 p-1 text-lg font-semibold ">
                        {company.name}
                    </span>
                    {company.logo_path && (
                        <img
                        src={`${baseSearchMovieImgUrl}${company.logo_path}`}
                        alt={`${company.name} Logo`}
                        className="w-8 h-8 ml-2 rounded-full inline-block mr-2 bg-slate-400 align-middle justify-center "
                        />
      )}

    </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        }
   </div>
  );
};
