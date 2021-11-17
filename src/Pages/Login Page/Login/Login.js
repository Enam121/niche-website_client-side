import React, { useState } from 'react';
import { TextField, Paper, Typography, Alert, CircularProgress } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
  const { signIn, user, loading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(loginData.email, loginData.password, location, history)

  }



  const textFieldStyle = {
    display: 'flex',
    width: '60%',
    margin: '25px auto',

  }
  console.log(user)
  return (
    <div>
      <Navigation />
      {!loading && <Paper variant="outlined" sx={{ p: 4, display: 'flex', margin: '30px auto', width: '40%', }}>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }} >
            Login
          </Typography>

          <TextField id="standard-basic" label="email" variant="standard" name="email" onBlur={handleOnBlur} sx={textFieldStyle} />

          <TextField id="standard-basic" label="password" variant="standard" name="password" onBlur={handleOnBlur} sx={textFieldStyle} />

          <input type="submit" value="Login" style={{ ...textFieldStyle, padding: '10px', justifyContent: 'center', fontSize: '17px', fontWeight: '600', background: '#5567ee', color: 'white', border: '0', borderRadius: '5px', cursor: 'pointer' }} />

          <Typography variant="subtitle" sx={{ display: 'block', textAlign: 'center' }}>
            Create Account? <Link to="/signup">signup</Link>
          </Typography>
        </form>
      </Paper>}
      {loading && <CircularProgress sx={{ display: 'flex', width: '50%', margin: '100px auto' }} />}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Login;