import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from '../../Shared/Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import { Typography } from '@mui/material';

const Explore = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Navigation />
      <Typography variant="h4" sx={{ textAlign: 'center', color: '#5567ee', my: 5 }}>
        Explore Our All Model Here
      </Typography>
      <Container sx={{ my: 15 }}>
        <Grid container spacing={2}>
          {
            products.map(product => <Product key={product.id} product={product} />)
          }
        </Grid>
      </Container>
    </>
  );
};

export default Explore;