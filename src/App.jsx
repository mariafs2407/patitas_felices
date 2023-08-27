import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/content/home/Home'

function App() { 

  return (
    <>
      <Header/>
      <Home/>      
      <Footer/>      
    </>
  )
}

export default App
