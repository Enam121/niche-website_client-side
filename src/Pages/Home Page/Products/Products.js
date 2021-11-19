import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://shrouded-mountain-50267.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Container sx={{ my: 15 }}>
      <Grid container spacing={2}>
        {
          products.slice(0, 8).map(product => <Product key={product.id} product={product} />)
        }
      </Grid>
    </Container>
  );
};

export default Products;