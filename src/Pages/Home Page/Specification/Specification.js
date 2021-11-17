import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import specification_banner from '../../../images/specification_banner.png';
import img_1 from '../../../images/build_quality.jpg';
import img_2 from '../../../images/excellent-battery-life.jpg';
import img_3 from '../../../images/battery-life.jpg';
import img_4 from '../../../images/accurate-activity-tracking.jpg';
import { Box } from '@mui/system';


const Specification = () => {
  // const margin = { marginY: '80px' !important,}

  return (
    <div className="margin">
      <Container>
        <Grid container spacing={4} sx={{ placeItems: 'center', }}>

          <Grid item xs={12} md={5} lg={6}>
            <img src={specification_banner} width="100%" alt="specification banner" />
          </Grid>

          <Grid item xs={12} md={7} lg={6}>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={6}>
                <img src={img_1} width="100px" alt="build quality img" />
                <Box sx={{ textAlign: 'start', }}>
                  <Typography variant="h6">
                    Build Quality and Design
                  </Typography>
                  <Typography variant="subtitle">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <img src={img_2} width="100px" alt="excellent battery life" />
                <Box sx={{ textAlign: 'start', }}>
                  <Typography variant="h6">
                    Excellent battery life
                  </Typography>
                  <Typography variant="subtitle">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <img src={img_3} width="100px" alt="battery life" />
                <Box sx={{ textAlign: 'start', }}>
                  <Typography variant="h6">
                    Battery life
                  </Typography>
                  <Typography variant="subtitle">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <img src={img_4} width="100px" alt="Accurate activity tracking" />
                <Box sx={{ textAlign: 'start', }}>
                  <Typography variant="h6">
                    Accurate activity tracking
                  </Typography>
                  <Typography variant="subtitle">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default Specification;