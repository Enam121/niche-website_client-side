import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('product added successfully');
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
        <h2>Add a product </h2>

        <input type="text"
          style={{ padding: '10px' }}
          placeholder="Product Name"

          {...register("name", { maxLength: 80 })} required />
        <br />
        <input type="text"
          style={{ padding: '10px' }}
          placeholder="Image url"

          {...register("img",)} required />
        <br />
        <input type="number"
          style={{ padding: '10px' }}
          placeholder="Price" {...register("price", { required: true, })} />
        <br />
        <textarea rows="7"
          placeholder="Description"
          style={{ padding: '10px' }}
          {...register("description", { required: true })} />
        <br />
        <Button variant="contained" type="submit"> Add</Button>

      </form>
    </div>
  );
};

export default AddProduct;