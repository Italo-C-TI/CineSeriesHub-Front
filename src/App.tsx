import { Outlet } from "react-router-dom"
import { Footer } from "./components"

export const App = () => {
    return (
      <div className="container flex-auto flex-col h-screen w-screen mx-auto 
       mt-10 justify-center ">
        <header className="flex flex-auto justify-center text-4xl">
        CineSeriesHub
        </header>
        
        <Outlet />
        <Footer/>
      </div>
    )
  }
  