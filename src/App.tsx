import { Outlet } from "react-router-dom"

export const App = () => {
    return (
      <div className="container h-screen w-screen mx-auto justify-items-center align-middle justify-center text-red-500 mt-10 flex-col">
        <header>
        header
        </header>
        <h1 className="text-7xl">CineSeriesHub</h1>
        <Outlet />
        <footer>
            footer
        </footer>
      </div>
    )
  }
  