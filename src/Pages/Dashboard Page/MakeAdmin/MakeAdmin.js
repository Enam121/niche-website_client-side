import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';


const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const getEmail = e => setEmail(e.target.value);

  const handleMakeAdmin = () => {
    const user = { email };
    fetch('https://shrouded-mountain-50267.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          alert('The admin has been successfully created')
        }
      })

  }

  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <Typography variant="h4">
        Make an admin
      </Typography>

      <form onSubmit={handleMakeAdmin} sx={{ display: 'flex', mt: 1 }}>
        <TextField
          label="Email"
          type="email"
          variant="filled"
          onBlur={getEmail}
        />
        <Button variant="outlined">
          Make Admin
        </Button>
      </form>
    </Box>
  );
};

export default MakeAdmin;