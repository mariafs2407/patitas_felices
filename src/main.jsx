import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import Home from './components/content/home/Home';
import Nosotros from './components/content/nosotros/Nosotros';
import Curiosities from './components/content/curiosidades/Curiosities';
import './index.css'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='nosotros' element={<Nosotros />} />
          </Route>
          <Route path="/curiosidades" element={<App />}>
            <Route index element={<Curiosities/>}>
              

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
