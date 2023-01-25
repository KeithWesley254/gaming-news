import { Box, Grid } from '@mui/material'
import React from 'react'
import Giveaways from '../components/Giveaways'
import MmoNews from './MmoNews'

const Hero = () => {

  return (
    <Box>
      <Grid container spacing={2} columns={12}>

        <Grid item xs={12} md={4}>
          <Giveaways />
        </Grid>
        <Grid item xs={12} md={4}>
          <MmoNews />
        </Grid>
        <Grid item xs={12} md={4}>
          Free Games
        </Grid>

      </Grid>
    </Box>
  )
}

export default Hero
