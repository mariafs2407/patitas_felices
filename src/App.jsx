import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/content/home/Home'

function App() { 

  return (
    <>
      <Header/>
      <Home/>
      <div>
        <h1>hola</h1>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
