import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

const REACT_APP_PRIV_KEY = import.meta.env.VITE_REACT_APP_PRIV_KEY;
const REACT_APP_PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const SpecificCharacter = () => {

  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + REACT_APP_PRIV_KEY + REACT_APP_PUBLIC_KEY).toString();

  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
          const res = await axios.get(`https://gateway.marvel.com/v1/public/characters/${params.id}?apikey=${REACT_APP_PUBLIC_KEY}&ts=${ts}&hash=${hash}`);
          setCharacter(res.data.data.results)
          setIsLoading(false);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      } catch (error) {
          console.log(error);
      }
    }
    fetchCharacter();
  }, [params]);
  
  console.log(character)

  if(isLoading === true) return (
    <LinearProgress color="success"/>
  );

  return (
    <div>SpecificCharacter</div>
  )
}

export default SpecificCharacter