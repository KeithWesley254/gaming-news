import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import mainLogo from '../main-logo.svg';
import DOMPurify from 'dompurify';

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

  const date1 = new Date(giveaway.end_date);
  const date2 = new Date();

  const remaining = Math.floor((date1-date2) / 1000 / 60 / 60 / 24);
  const instructions = DOMPurify.sanitize(giveaway.instructions).split("\r\n");
  const listItems = instructions.map((instruction, index) => <li style={{listStyleType: "none", marginTop: "5px", marginBottom: "5px"}} key={index}>{instruction}</li>);

  if(isLoading === true) return (
    <LinearProgress color="success"/>
  );

  return (
    <Box>

      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6}>
          <Box>
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
          </Box>
          
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{position: {xs: "absolute", md: "relative"}, top: {xs: "40%", md: "0%"}}}>
            <Typography sx={{fontFamily: 'cinzel', fontSize: "25px", fontWeight: "bolder", textAlign: 'center'}} >{giveaway.title}</Typography>
          </Box>
          <Grid container spacing={2} columns={6}>
            <Grid item xs={6} md={3}>
              <Box sx={{position: {xs: "absolute", md: "relative"}, top: {xs: "50%", md: "0%"}}}>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>Platforms:</span> {giveaway.platforms}
                </Typography>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>Status:</span> {giveaway.status}
                </Typography>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>Days Remaining:</span> {date1 > 0 ? remaining + " day(s)" : "Ended"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{position: {xs: "absolute", md: "relative"}, top: {xs: "64%", md: "0%"}}}>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>Users:</span> {giveaway.users}
                </Typography>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>Worth:</span> {giveaway.worth}
                </Typography>
                <Typography sx={{fontFamily: 'Manrope', my: 2, fontSize: "16px", fontWeight: "bold", textAlign: 'start'}}>
                  <span className='giveaway-span'>GamePower website:</span> <a style={{cursor: "pointer", color: "#fff"}} href={giveaway.gamerpower_url} target="_blank">Link to the Page</a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
        </Grid>

      </Grid>

      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={12}>
          <Box sx={{position: {xs: "absolute", md: "relative"}, top: {xs: "80%", md: "0%"}}}>
            <Typography 
            sx={{fontFamily: 'cinzel', my: 2, ml: {xs: 0, md: 2}, fontSize: "25px", fontWeight: "bolder", textAlign: 'start'}}
            >
              How to Get your Key:
            </Typography>
            <Box sx={{fontFamily: 'Manrope', my: 2, fontWeight: "bold", ml: {xs: 0, md: 2}, fontSize: "16px",}}>
              {listItems}
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default SpecificGiveaway