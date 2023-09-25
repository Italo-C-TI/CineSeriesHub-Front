import { StarIcon } from "../assets";
import { MovieInterface } from "../types&enums/movies.types"
import { baseSearchMovieImgUrl } from "../urls/movies";



interface MoviesCardParamsInterface {
    movie: MovieInterface;
}
  

export const MovieCard = ({movie}: MoviesCardParamsInterface) => {
    return (
      <div className="flex items-start space-x-6 p-6 my-10 bg-slate-400 ">

        <div className="min-w-0 relative flex-auto">
          <h2 className="font-black	text-2xl mb-3	 text-white truncate pr-20">{movie.title}</h2>
          <img src={`${baseSearchMovieImgUrl}${movie.poster_path}`} alt="Banner" width="800" height="200" className="flex-none rounded-md bg-slate-100" />

          <div className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <div className="text-sky-500">
              <StarIcon/>         
              </div>
              <dd>{movie.vote_average}</dd>
            </div>
            <div>
            </div>
            <div>
              <div className="flex max-h-72 overflow-hidden overflow-ellipsiss">
               {movie.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }