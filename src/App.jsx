import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import FreeGames from './pages/FreeGames';
import MmoNews from './pages/MmoNews';
import NewsTicker from './components/NewsTicker';
import axios from "axios";
import SpecificGiveaway from './pages/SpecificGiveaway';

function App() {

  const [newsItems, setNewsItems] = useState([
    {id: 1, title: "listening for news..."}
  ]);
  const [newsErrors, setNewsErrors] = useState([]);

  useEffect(() =>  {
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/latestnews',
      headers: {
        'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setNewsItems(response.data);
    }).catch(function (error) {
      setNewsErrors(error);
    });
  }, [])

  return (
    <div className="App">
      <Header />
      <NewsTicker newsItems={newsItems} />
      <Routes>
        <Route exact='true' path='/' element={<Hero newsItems={newsItems}/>}/>
        <Route path='/free-games' element={<FreeGames />} />
        <Route path='/mmo-news' element={<MmoNews />} />
        <Route path='/specific-giveaway/:id' element={<SpecificGiveaway />} />
      </Routes>
    </div>
  )
}

export default App
