import React, { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductManage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://shrouded-mountain-50267.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));

  }, [])

  const deleteProduct = (name) => {
    const proceed = window.confirm('Are you sure you want to delete this item?');
    if (proceed) {
      fetch(`https://shrouded-mountain-50267.herokuapp.com/products/delete/${name}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            alert('deleted successfully')
            const remaining = products.filter(product => product.name !== name);
            setProducts(remaining);
          }
        })

    }

  }

  return (
    <Grid container >
      <h3>Manage Products</h3>

      {products.map(product => <Grid item md={12} key={product._id}>

        <Card sx={{ pb: 2, my: 2, pr: 1 }}>
          <CardActionArea >
            <Grid container spacing={3} sx={{ placeItems: 'center' }}>

              <Grid item md={6}>

                <CardMedia
                  component="img"
                  image={product.img}
                  sx={{ width: '50%' }}
                  alt="green iguana"
                />

              </Grid>

              <Grid item md={4}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>

                  <Typography variant="h5" component="div">
                    ${product.price}.00
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item md={2}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteProduct(product.name)}
                >Delete
                </Button>
              </Grid>

            </Grid>

          </CardActionArea>

        </Card>
      </Grid>)}

    </Grid>
  );
};

export default ProductManage;