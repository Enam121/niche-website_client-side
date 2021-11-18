import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardActionArea, Grid } from '@mui/material';



const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    user.email !== undefined && fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))

  }, [user.email]);


  const deleteProduct = (name) => {
    const proceed = window.confirm('Are you sure you want to delete this item?');
    if (proceed) {
      fetch(`http://localhost:5000/delete/${name}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            alert('deleted successfully')
            const remaining = orders.filter(({ orderInfo }) => orderInfo.name !== name);
            setOrders(remaining);
          }
        })

    }

  }

  return (
    <Grid container >
      <h3>You have {orders.length} order</h3>

      {orders.map(({ orderInfo }) => <Grid item md={12} key={orderInfo._id}>

        <Card sx={{ pb: 2, my: 2, pr: 1 }}>
          <CardActionArea >
            <Grid container spacing={3} sx={{ placeItems: 'center' }}>

              <Grid item md={6}>

                <CardMedia
                  component="img"
                  image={orderInfo.img}
                  sx={{ width: '50%' }}
                  alt="green iguana"
                />

              </Grid>

              <Grid item md={4}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {orderInfo.name}
                  </Typography>

                  <Typography variant="h5" component="div">
                    ${orderInfo.price}.00
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item md={2}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteProduct(orderInfo.name)}
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

export default MyOrders;