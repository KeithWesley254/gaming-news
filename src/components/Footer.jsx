import React from 'react'
import { Container } from "@mui/system";
import { Box, Grid, Link, Typography } from '@mui/material';
import image from '../main-logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Box 
        sx={{mt: 4, py: 3, position: {xs: "absolute", md: "relative"}, top: {xs: "160%", md: "0%"}}}
        bgcolor="#3a3a3a" 
        color="#fff"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Navigate</Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} onClick={() => navigate(`/`)} style={{cursor: 'pointer'}} color="inherit" underline='none'><i className="fa-solid fa-house"></i> Home</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://keithwesley254.github.io/' color="inherit" target="_blank" underline='none'><i className="fa-solid fa-earth-africa"></i> Developer Website</Link>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Socials</Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://github.com/KeithWesley254' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-github"></i> Github</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://www.linkedin.com/in/keith-wesley-707802215/' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-linkedin"></i> LinkedIn</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://twitter.com/Keith_wesley_' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-twitter"></i> Twitter</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://www.instagram.com/keith_wesley_/' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-instagram"></i> Instagram</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link sx={{fontSize: "13px"}} href='https://www.youtube.com/channel/UCZ-MKtsBjTD4glktrbEYFXw' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-youtube"></i> Youtube</Link>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                        <Typography
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'cinzel',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#fff',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        }}
                        onClick={() => navigate(`/`)}
                        >
                        <img src={image} alt="logo" style={{maxHeight: "40px", maxWidth: "60px", cursor: "pointer"}}/>
                        &nbsp;
                        &nbsp;
                            TXC Clan Gaming News
                        </Typography>
                        </Box>
                        <br />
                        <Box>
                            <Typography sx={{fontSize: "13px"}}>
                            Welcome to TXC Clan Gaming News - the ultimate destination for all things 
                            gaming! We are dedicated to providing our readers with the latest gaming news, 
                            reviews, and updates. Whether you're a hardcore gamer or a casual player, 
                            we have something for everyone. From game giveaways and contests, to comics and other fun content, 
                            we've got you covered. So join our community of gamers today and stay up-to-date 
                            on all the latest happenings in the gaming world!
                            </Typography>
                            &nbsp;
                            <Typography sx={{fontSize: "13px"}}>
                            © 2023 TXC Clan Gaming News. All Rights Reserved.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Footer;