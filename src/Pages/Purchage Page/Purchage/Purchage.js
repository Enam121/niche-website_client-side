import { Grid, Container, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';



const Purchage = () => {
  const [product, setProduct] = useState([]);
  const { name } = useParams();
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    const newData = { userInfo: data, orderInfo: product }

    console.log(newData)
    fetch('https://shrouded-mountain-50267.herokuapp.com/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Order has been successfull')
          reset();
        }
      })
  };
  // console.log(errors);


  useEffect(() => {
    fetch(`https://shrouded-mountain-50267.herokuapp.com/purchage/${name}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [name]);

  const textFieldStyle = {
    display: 'flex',
    width: '50%',
    margin: '5px auto',
    padding: '10px',
    background: '#f2f2f2',
    border: '0',
    outline: 'none'

  }

  return (
    <>
      <Navigation />
      <Container>
        <Grid container spacing={2} sx={{ placeItems: 'center' }}>
          <Grid item md={6}>
            <img src={product.img} width="100%" alt="" />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5">
              {product.name}
            </Typography>

            <Typography variant="h6" sx={{ my: '3' }}>
              Price ${product.price}
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
              About this item
            </Typography>
            <Typography variant="paragraph">
              {product.description}
            </Typography>
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '100px auto' }}>
          <Typography variant="h4" sx={{ my: 4, textAlign: 'center', color: '#5567ee' }}>
            Shipping Information
          </Typography>
          <input type="text" placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 80 })} style={textFieldStyle} />
          <br />
          <input type="text" placeholder="Email" defaultValue={user.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} style={textFieldStyle} />
          <br />
          <input type="tel" placeholder="Phone number" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} style={textFieldStyle} />
          <br />
          <input type="text" placeholder="City" {...register("city", { required: true, maxLength: 100 })} style={textFieldStyle} />
          <br />
          <input type="text" placeholder="Address" {...register("address", { required: true, maxLength: 100 })} style={textFieldStyle} />
          <br />
          <input type="submit"
            value="Continue Shipping"
            style={{
              display: 'flex',
              width: '51%',
              margin: '5px auto',
              padding: '10px',
              fontWeight: '600',
              background: '#5567ee',
              border: '0',
              borderRadius: '5px',
              justifyContent: 'center',
              color: 'white',
              fontSize: '17px',
              cursor: 'pointer'
            }} />
        </form>

      </Container>
      <Footer />
    </>
  );
};

export default Purchage;