import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Grid, InputBase, Paper, IconButton, Typography, Pagination, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

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

const AllCharacters = ({allCharacters}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [charPage, setCharPage] = useState(1);

    const handleSearch = () => {
        return allCharacters.filter(ga => ga.name?.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

    const displayCharacters =  
    handleSearch()
    .slice((charPage - 1) * 10, (charPage - 1) * 10 + 10)
    .map((char) => {
        return(
        <Box key={char.id} sx={{mr:2, ml: 2}}>
            <Link style={{textDecoration: "none"}} to={`/characters/${char.id}`}>
                <Card sx={{ width: 200, height: 260, border: 1, p: 2 }}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={(char.thumbnail?.path) + ".jpg"}
                        alt={char?.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">
                        Full Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {char?.name}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Link>

            </Box>
        
        )
    }) 

  return (
    <Box>

        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={12}>
                <Box sx={{display: "flex", justifyContent: "center", my: 2}}>
                    <ThemeProvider theme={theme}>
                        <Paper component="form" style={styles.root} onSubmit={handleSubmit}>
                            <InputBase
                            style={styles.input}
                            placeholder="character name..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <IconButton type="submit" style={styles.iconButton}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </ThemeProvider>
                </Box>
            </Grid>
        </Grid>

        <Grid container spacing={2} columns={12} sx={{textAlign: "center", pl:4, pr:4, justifyContent: "center", alignItems: "center", fontSize: 14 }}>
            <Grid item xs={12} md={12} >
              <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
                <Box sx={{ borderRadius: 20, display: "inline-flex", flexDirection: 'row'  }}>
                  {displayCharacters}
                </Box>
              </div>
            </Grid>
        </Grid>

        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={12}>
                <Box>
                <Pagination 
                style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
                count={parseInt((handleSearch().length/10).toFixed(0))}
                onChange={(_, value) => {
                    setCharPage(value);
                }}
                />
                </Box>
            </Grid>
        </Grid>

    </Box>
  )
}

export default AllCharacters