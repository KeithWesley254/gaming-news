import { Box, Grid } from '@mui/material'
import React from 'react'
import Giveaways from '../components/Giveaways'
import MmoNews from './MmoNews'

const Hero = ({newsItems}) => {

  return (
    <Box>
      <Grid container spacing={2} columns={12}>

        <Grid item xs={12} md={8}>
          <MmoNews newsItems={newsItems}/>
        </Grid>

        <Grid item xs={12} md={4}>
          <Giveaways />
        </Grid>

      </Grid>
    </Box>
  )
}

export default Hero
