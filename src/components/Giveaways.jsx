import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Grid, InputBase, Paper, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

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
};


const Giveaways = () => {
    const [allGiveaways, setAllGiveaways] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
            headers: {
              'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
              'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setAllGiveaways(response.data);
          })
    }, []);

    // console.log(allGiveaways);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        const results = allGiveaways.filter(ga => ga.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }

  return (
    <Box>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={12}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <ThemeProvider theme={theme}>
                    <Paper component="form" style={styles.root} onSubmit={handleSearch}>
                        <InputBase
                        style={styles.input}
                        placeholder="Name of the Game..."
                        inputProps={{ '"Cinzel", serif': 'name of the game...' }}
                        onChange={handleSearch}
                        />
                        <IconButton type="submit" style={styles.iconButton}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </ThemeProvider>
                </Box>
                <Typography sx={{textAlign: "center"}}><b>AVAILABLE GIVEAWAYS</b></Typography>
                <Box sx={{overflowY: "scroll", my: 2, maxHeight: "500px"}}>
                    {searchResults.map(result => (
                        <ol key={result.id}>
                            <Typography 
                            sx={{textAlign: "left", fontSize: "13px", fontFamily: "'Cinzel', serif", cursor: "pointer"}} 
                            onClick={() => navigate(`/specific-giveaway/${result.id}`)}
                            >
                               <img width='50px' height='50px' src={result.thumbnail} alt={result.title} /> &nbsp; {result.title}
                            </Typography>
                        </ol>
                    ))}
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Giveaways;
