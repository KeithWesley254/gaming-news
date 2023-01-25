import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Menu, Container, Button, MenuItem, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import mainLogo from '../main-logo.svg';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{backgroundColor: "#272727"}} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{cursor: "pointer"}} className="headerLogo" onClick={() => navigate("/")}>
            <img src={mainLogo} width="100" height="70" alt="TXC Clan logo" />
            {/* <p
              style={{
                fontWeight: "bolder",
                fontSize: 14,
                color: "#fff",
                cursor: "pointer",
              }}
            >
              TXC Clan
              <br />
              <span style={{ color: "#ff8833", cursor: "pointer" }}>
                Gaming News
              </span>
            </p> */}
          </div>

          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#0bbb34" }}
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography
                  sx={{
                    my: 1,
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0bbb34",
                    fontFamily: 'Rubik Distressed'
                  }}
                  textAlign="center"
                >
                  Home
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/free-games");
                }}
              >
                <Typography
                  sx={{
                    my: 1,
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0bbb34",
                    fontFamily: 'Rubik Distressed'
                  }}
                  textAlign="center"
                >
                  Free Games
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/mmo-news");
                }}
              >
                <Typography
                  sx={{
                    my: 1,
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0bbb34",
                    fontFamily: 'Rubik Distressed'
                  }}
                  textAlign="center"
                >
                  MMO news
                </Typography>
              </MenuItem>

            </Menu>

            <Box sx={{my: 2, display: "flex", justifyContent: "end"}}>

                &nbsp; &nbsp; &nbsp;
                <Link href='https://github.com/KeithWesley254' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-github"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.linkedin.com/in/keith-wesley-707802215/' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-linkedin"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://twitter.com/Keith_wesley_' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-twitter"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.youtube.com/channel/UCZ-MKtsBjTD4glktrbEYFXw' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-youtube"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.instagram.com/keith_wesley_/' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-instagram"></i></Link>
                &nbsp; &nbsp; &nbsp;
            </Box>

          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end" },
            }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{
                my: 2,
                textTransform: "none",
                display: "block",
                fontSize: 15,
                fontWeight: 600,
                color: "#0bbb34",
                fontFamily: 'Rubik Distressed'
              }}
            >
              Home
            </Button>
            &nbsp; &nbsp; &nbsp;
            
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/free-games");
              }}
              sx={{
                my: 2,
                textTransform: "none",
                display: "regular",
                fontSize: 15,
                fontWeight: 600,
                color: "#0bbb34",
                fontFamily: 'Rubik Distressed'
              }}
            >
              Free Games
            </Button>
            &nbsp; &nbsp; &nbsp;

            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/mmo-news");
              }}
              sx={{
                my: 2,
                textTransform: "none",
                display: "regular",
                fontSize: 15,
                fontWeight: 600,
                color: "#0bbb34",
                fontFamily: 'Rubik Distressed'
              }}
            >
              MMO news
            </Button>
            &nbsp; &nbsp; &nbsp;

            <Box sx={{my: 3, }}>

                &nbsp; &nbsp; &nbsp;
                <Link href='https://github.com/KeithWesley254' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-github"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.linkedin.com/in/keith-wesley-707802215/' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-linkedin"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://twitter.com/Keith_wesley_' color="inherit" target="_blank" underline='none'><i className="fa-brands fa-twitter"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.youtube.com/channel/UCZ-MKtsBjTD4glktrbEYFXw' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-youtube"></i></Link>
                &nbsp; &nbsp; &nbsp;

                <Link href='https://www.instagram.com/keith_wesley_/' target="_blank" color="inherit" underline='none'><i className="fa-brands fa-instagram"></i></Link>
                &nbsp; &nbsp; &nbsp;
            </Box>

            
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;