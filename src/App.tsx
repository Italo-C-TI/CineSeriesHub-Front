import { Link, Outlet } from "react-router-dom"
import { Footer } from "./components"

export const App = () => {
    return (
      <div className="container flex-auto flex-col h-screen w-screen mx-auto 
       mt-10 justify-center ">
        <header className="flex flex-auto justify-center text-4xl">
            <Link to="/" className="text-blue-100 hover:underline">
            CineSeriesHub
            </Link>
        </header>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  