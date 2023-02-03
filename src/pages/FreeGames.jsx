import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}

const FreeGames = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
      params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
      headers: {
        'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setGames(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const handleSearch = () => {
    return games.filter(ga => ga.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch();
  }

  // console.log(games);

  return (
    <Box>
      <Grid container spacing={2} columns={12}>

        <Grid item xs={12} md={8}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: {xs: "40px", md: "70px"}, textAlign: 'center'}}>
              Highlighted Game
            </Typography>
          </Box>

          {selectedGame.id?
            <Box sx={{ display: "block", justifyContent: "center", textAlign: "center", overflowY: "scroll", maxHeight: {xs: "500px", md: "1200px"}}}>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "25px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Game: </span>{selectedGame?.title}</Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Developer: </span>{selectedGame?.developer}</Typography>
              <img src={selectedGame?.thumbnail} alt={selectedGame?.title}/>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Genre: </span>{selectedGame?.genre}</Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Description</span></Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} >{selectedGame?.short_description}</Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Platform: </span>{selectedGame?.platform}</Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Publisher: </span>{selectedGame?.publisher}</Typography>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "20px", fontWeight: "bolder", textAlign: 'center'}} > <span className='giveaway-span'>Release Date: </span>{selectedGame?.release_date}</Typography>
              <a href={selectedGame?.game_url} target="_blank" />
            </Box>
          :
            <Box>
              <Typography sx={{fontFamily: 'cinzel', my: 2, mx: 2, fontSize: "25px", fontWeight: "bolder", textAlign: 'center'}} >Choose a game...</Typography>
            </Box>
          }
          
          
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{display: "flex", justifyContent: "center", my: 2}}>
              <ThemeProvider theme={theme}>
                  <Paper component="form" style={styles.root} onSubmit={handleSubmit}>
                      <InputBase
                      style={styles.input}
                      placeholder="game title..."
                      onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <IconButton type="submit" style={styles.iconButton}>
                          <SearchIcon />
                      </IconButton>
                  </Paper>
              </ThemeProvider>
          </Box>

          <Box sx={{overflowY: "scroll", my: 2, maxHeight:{md: "700px", xs: "500px"}}}>
              {handleSearch()
              .map(game => (
                  <ol key={game.id}>
                      <Typography 
                      sx={{textAlign: "left", fontSize: "16px", fontFamily: "'Cinzel', serif", cursor: "pointer"}} 
                      onClick={() => {
                        setSelectedGame(game)
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                      }}
                      >
                         <img width='50px' height='40px' src={game?.thumbnail} alt={game?.title} /> &nbsp; {game?.title}
                      </Typography>
                  </ol>
              ))}
          </Box>
          
        </Grid>

      </Grid>
    </Box>
  )
}

export default FreeGames