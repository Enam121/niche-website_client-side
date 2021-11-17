import React, { useState } from 'react';
import { TextField, Paper, Typography, Alert, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const SignUp = () => {

  const { signUp, user, loading, authError } = useAuth();

  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  }

  const handlesignup = (e) => {
    e.preventDefault();
    signUp(loginData.name, loginData.email, loginData.password)

  }

  const textFieldStyle = {
    display: 'flex',
    width: '60%',
    margin: '25px auto',

  }


  return (
    <div>
      <Navigation />
      {!loading && <Paper variant="outlined" sx={{ p: 4, display: 'flex', margin: '0px auto', width: '40%', }}>
        <form onSubmit={handlesignup} style={{ width: "100%" }}>
          <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }} >
            Signup
          </Typography>

          <TextField label="Full Name" variant="standard" name="name" onBlur={handleOnBlur} sx={textFieldStyle} />

          <TextField label="Email" variant="standard" name="email" onBlur={handleOnBlur} sx={textFieldStyle} />

          <TextField label="Password" variant="standard" name="password" onBlur={handleOnBlur} sx={textFieldStyle} />

          <input type="submit" value="Sign up" style={{ ...textFieldStyle, padding: '10px', justifyContent: 'center', fontSize: '17px', fontWeight: '600', background: '#5567ee', color: 'white', border: '0', borderRadius: '5px', cursor: 'pointer' }} />

          <Typography variant="subtitle" sx={{ display: 'block', textAlign: 'center' }}>
            Already have an account? <Link to="/login">login</Link>
          </Typography>
        </form>
      </Paper>}
      {loading && <CircularProgress sx={{ display: 'flex', width: '50%', margin: '100px auto' }} />}
      {user.email && <Alert severity="success">Successfully sign up</Alert>}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default SignUp;