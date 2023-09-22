import { List } from "./List"
import { MovieCard } from "./MovieCard"
import { Nav } from "./Nav"
import { NavItem } from "./NavItem"

export const Movies = ({ movies }:any) => {
    return (
      <div className="divide-y divide-slate-100">
        <Nav>
          <NavItem href="/new" isActive>New Releases</NavItem>
          <NavItem href="/top">Top Rated</NavItem>
          <NavItem href="/picks">Vincent’s Picks</NavItem>
        </Nav>
        <List>
          {movies.map((movie: { id: any }) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </List>
      </div>
    )
  }