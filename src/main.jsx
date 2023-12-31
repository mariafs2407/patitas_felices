import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import Home from './components/content/home/Home';
import Nosotros from './components/content/nosotros/Nosotros';
import Curiosities from './components/content/curiosidades/Curiosities';
import Adopt from './components/content/adopta/Adopt';
import Testimony from './components/content/testimonio/Testimony';
import Donate from './components/content/donar/Donate';
import Beneficios from './components/content/donar/CarosuelDon';
import Pagina404 from './components/content/Pagina_404';
import Patrinar from './components/content/patrinar/Patrinar';
import './index.css'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>} />
          <Route path='nosotros' element={<Nosotros/>} />
          <Route path='curiosidades' element={<Curiosities/>} />
          <Route path='adopta' element={<Adopt/>} />
          <Route path='testimonio' element={<Testimony/>} />
          <Route path='donar' element={<Donate/>} />     
          <Route path='beneficios' element={<Beneficios/>} /> 
          <Route path='patrinar' element={<Patrinar/>} /> 
        </Route>
        <Route path='*' element={<Pagina404/>} />  
      </Routes>     
    </BrowserRouter>
  )
