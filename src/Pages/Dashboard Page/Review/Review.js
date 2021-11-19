import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('https://shrouded-mountain-50267.herokuapp.com/review', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Review added successfully');
          reset();
        }
      })
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',

  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h2>Review </h2>

        <input type="text"
          style={{ padding: '10px' }}
          placeholder="Name"
          defaultValue={user.displayName}
          {...register("name", { maxLength: 80 })} required />
        <br />
        <input type="email"
          style={{ padding: '10px' }}
          placeholder="email"
          defaultValue={user.email}
          {...register("email",)} required />
        <br />
        <input type="number"
          style={{ padding: '10px' }}
          placeholder="Rating" {...register("rating", { required: true, maxLength: 1 })} max="5" min="0" width="100%" />
        <br />
        <textarea rows="7"
          placeholder="Write yout valuable review please"
          style={{ padding: '10px' }}
          {...register("review", { required: true })} />
        <br />
        <Button variant="contained" type="submit"> Add</Button>

      </form>
    </div>
  );
};

export default Review;