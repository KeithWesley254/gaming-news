import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import FreeGames from './pages/FreeGames';
import MmoNews from './pages/MmoNews';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact='true' path='/' element={<Hero />}/>
        <Route path='/free-games' element={<FreeGames />} />
        <Route path='/mmo-news' element={<MmoNews />} />
      </Routes>
    </div>
  )
}

export default App
