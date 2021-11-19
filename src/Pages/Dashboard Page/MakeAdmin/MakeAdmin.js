import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';


const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const getEmail = e => {
    setEmail(e.target.value)
  }
  console.log(email)
  const handleMakeAdmin = () => {
    const user = { email }
    fetch('http://localhost:5000/users/admin', {
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

      <Box sx={{ display: 'flex', mt: 1 }}>
        <TextField
          label="Email"
          type="email"
          variant="filled"
          onBlur={getEmail}
        />
        <Button onClick={handleMakeAdmin} variant="outlined">
          Make Admin
        </Button>
      </Box>
    </Box>
  );
};

export default MakeAdmin;