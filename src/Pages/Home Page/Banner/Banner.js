import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import bannerImg from '../../../images/banner.png';


const Banner = () => {



  return (
    <div style={{ minHeight: '400px', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container spacing={2} sx={{ placeItems: 'center' }}>
          <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'start' }}>
            <Typography variant="body1" fontSize={{ xs: 18, sm: 24 }}>
              Here to make hand turn
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: '600', my: 3 }} fontSize={{ xs: 32, sm: 55 }}>
              The future of tech is here.
            </Typography>
            <Button variant="contained" sx={{ background: '#5567ee', py: 1.5, px: 5, fontWeight: '600', color: 'white', fontSize: '18px' }}>
              SHOP NOW
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <img src={bannerImg} width="90%" alt="watch banner" />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

export default Banner;