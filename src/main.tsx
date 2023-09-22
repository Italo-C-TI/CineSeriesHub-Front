import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home,Movie} from './pages'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Movie/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
