import { Outlet } from "react-router-dom"

export const App = () => {
    return (
      <div className="container flex-auto flex-col h-screen w-screen mx-auto 
       text-red-500 mt-10 justify-center ">
        <header className="flex  justify-center">
        header
        </header>
        <h1 className="flex  justify-center text-7xl">CineSeriesHub</h1>
        <Outlet />
        <footer className="flex  justify-center">
            footer
        </footer>
      </div>
    )
  }
  