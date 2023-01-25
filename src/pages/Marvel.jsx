import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Grid, CardActionArea, Typography, Button } from '@mui/material';

const REACT_APP_PRIV_KEY = import.meta.env.VITE_REACT_APP_PRIV_KEY;
const REACT_APP_PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const Marvel = () => {
    const [comics, setComics] = useState([]);

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
    }, []);

    console.log(comics)

    const comicBooks = comics.map((comic) => {
      return(
        <Box key={comic.id} sx={{display: "inline-flex", my: 4, justifyContent: "center"}}>
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
    
  return (
    <Box>
      <Grid container spacing={2} columns={12}>
        <Grid items xs={12} md={12}>
          <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
            <Box sx={{ borderRadius: 20, display: "inline-flex", flexDirection: 'row'  }}>
              {comicBooks}
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Marvel