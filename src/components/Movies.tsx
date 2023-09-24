import { MovieInterface, MoviesInterface } from "../types&enums/movies.types"
import { List } from "./List"
import { MovieCard } from "./MovieCard"
import { Nav } from "./Nav"
import { NavItem } from "./NavItem"

export const Movies = ({ results: movies }: Partial<MoviesInterface>) => {
    console.log(movies);
    return (
      <div className="divide-y divide-slate-100">
        <Nav>
          <NavItem href="/now_playing/movies" isActive>New Releases</NavItem>
          <NavItem href="/top_rated/movies">Top Rated</NavItem>
          <NavItem href="/popular/movies">Vincent’s Picks</NavItem>
        </Nav>
        <List>
          {movies!.map((movie: MovieInterface) => (
          <MovieCard movie={movie}/>
          ))}
        </List>
      </div>
    )
  }