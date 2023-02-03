import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Grid, CardActionArea, Typography } from '@mui/material';
import AllCharacters from '../components/AllCharacters';

const REACT_APP_PRIV_KEY = import.meta.env.VITE_REACT_APP_PRIV_KEY;
const REACT_APP_PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const Marvel = () => {
    const [comics, setComics] = useState([]);
    const [movies, setMovies] = useState([]);
    const [characters, setAllCharacters] = useState([]);

    let ts = new Date().getTime();
    let hash = CryptoJS.MD5(ts + REACT_APP_PRIV_KEY + REACT_APP_PUBLIC_KEY).toString();

    useEffect(() => {
      const fetchData = async () => {
        try {
            const res = await axios.get(`https://gateway.marvel.com/v1/public/comics?apikey=${REACT_APP_PUBLIC_KEY}&ts=${ts}&hash=${hash}`);
            setComics(res.data.data.results)
        } catch (error) {
            console.log(error);
        }
      }
      fetchData();
      const fetchMovies = async () => {
        try {
            const res = await axios.get(`https://gateway.marvel.com/v1/public/series?apikey=${REACT_APP_PUBLIC_KEY}&ts=${ts}&hash=${hash}`);
            setMovies(res.data.data.results)
        } catch (error) {
            console.log(error);
        }
      }
      fetchMovies();
      const fetchCharacters = async () => {
        try {
            const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${REACT_APP_PUBLIC_KEY}&ts=${ts}&hash=${hash}&limit=100`);
            setAllCharacters(res.data.data.results)
        } catch (error) {
            console.log(error);
        }
      }
      fetchCharacters();
    }, []);

    const comicBooks = comics.map((comic) => {
      return(
        <Box key={comic.id} sx={{display: "inline-flex", my: 3, justifyContent: "center"}}>
          <Card sx={{ width: 200, height: 300, mr: 1, ml: 1, display: "inline-flex", justifyContent: "center" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={(comic.thumbnail?.path) + ".jpg"}
                alt={comic?.title}
              />
              <CardContent>
                <Typography sx={{fontFamily: 'cinzel', fontSize: '14px'}}>
                  {comic?.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )
      })  
    
      const seriesMarvel = movies.map((movie) => {
        return(
          <Box key={movie.id} sx={{display: "inline-flex", my: 3, justifyContent: "center"}}>
            <Card sx={{ width: 200, height: 300, mr: 1, ml: 1, display: "inline-flex", justifyContent: "center" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={(movie.thumbnail?.path) + ".jpg"}
                  alt={movie?.title}
                />
                <CardContent>
                  <Typography sx={{fontFamily: 'cinzel', fontSize: '14px'}}>
                    {movie?.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        )
        }) 
  return (
    <Box>

      <Grid container spacing={2} columns={12} sx={{pl:4, pr:4}}>
        <Grid item xs={12} md={12}>
          <Box sx={{display: 'flex', ml: {xs: 0, md: 4}, justifyContent: 'start'}}>
            <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: {xs: "20px", md: "30px"}, textAlign: 'start'}}>Comics</Typography>
          </Box>
          <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
            <Box sx={{ borderRadius: 20, display: "inline-flex", flexDirection: 'row'  }}>
              {comicBooks}
            </Box>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{pl:4, pr:4, }}>
        <Grid item xs={12} md={12}>
          <Box sx={{display: 'flex', ml: {xs: 0, md: 4}, justifyContent: 'start'}}>
            <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: {xs: "20px", md: "30px"}, textAlign: 'start'}}>Series</Typography>
          </Box>
          <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
            <Box sx={{ borderRadius: 20, display: "inline-flex", flexDirection: 'row', }}>
              {seriesMarvel}
            </Box>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{pl:4, pr:4, }}>
        <Grid item xs={12} md={12}>
          <Box sx={{display: 'flex', ml: {xs: 0, md: 4}, justifyContent: 'start'}}>
            <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: {xs: "20px", md: "30px"}, textAlign: 'start'}}>Characters</Typography>
          </Box>
          <Box sx={{my: 2}}>
            <AllCharacters allCharacters={characters}/>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Marvel