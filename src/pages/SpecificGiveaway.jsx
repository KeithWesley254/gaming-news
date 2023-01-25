import { Box, Grid, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import mainLogo from '../main-logo.svg';

const SpecificGiveaway = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [giveaway, setGiveaway] = useState({});
  const params = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaway',
      params: {id: params.id},
      headers: {
        'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setGiveaway(response.data);
      setIsLoading(false);
    }).catch(function (error) {
      console.error(error);
    });
  }, [params]);

  console.log(giveaway)

  if(isLoading === true) return (
    <LinearProgress color="success"/>
  );

  return (
    <Box>

      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6}>
          <Box id="box">
            <div id='wrapper'>
              <div className='cube-container'>
                <div className='image-cube'>
                  <div className='front'>
                    <img src={giveaway.image} alt={giveaway.title}/>
                  </div>
                  <div className='right'>
                    <img src={giveaway.image} alt={giveaway.title}/>
                  </div>
                  <div className='back'>
                    <img height="100px" src={mainLogo} alt="main-logo"/>
                  </div>
                  <div className='left'>
                    <img src={giveaway.image} alt={giveaway.title}/>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

        </Grid>
      </Grid>

    </Box>
  )
}

export default SpecificGiveaway