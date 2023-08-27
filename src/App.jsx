import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/content/home/Home';
import {Outlet} from 'react-router-dom';

function App() { 

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>      
    </>
  )
}

export default App
