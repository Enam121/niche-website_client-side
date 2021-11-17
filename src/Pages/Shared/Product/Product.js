import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory, } from 'react-router';

const Product = ({ product }) => {
  const { img, name, price } = product;

  const history = useHistory();
  // const { id } = useParams();

  const handlePurchage = (name) => {
    const url = `/purchage/${name}`;
    history.push(url);
  }

  return (
    <Grid item xs={6} md={4} lg={3}>
      <img src={img} width="90%" alt="" />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontSize: '17px' }}>
          {name}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '700' }}>
          ${price}.00
        </Typography>
        <Button onClick={() => handlePurchage(name)} variant="outlined" sx={{ fontSize: '14px' }}>
          Parchage
        </Button>
      </Box>
    </Grid>
  );
};

export default Product;