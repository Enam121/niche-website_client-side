import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
  const history = useHistory();
  const { user, signingOut } = useAuth()

  const toLoginPage = () => history.push('/login');

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
      <AppBar position="static" sx={{
        background: '#5567ee'
      }}>
        <Toolbar>
          < IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" sx={{ color: "inherit", display: 'inline', mr: 2 }}>
                EX Watch
              </Typography>

              <Link to="/home" style={{ textDecoration: 'none', color: "white" }}>
                <Button color="inherit" >Home</Button>
              </Link>

              <Link to="/explore" style={{ textDecoration: 'none', color: "white" }}>
                <Button color="inherit" >Explore</Button>
              </Link>

              <Link to="/contact" style={{ textDecoration: 'none', color: "white" }}>
                <Button color="inherit" >Contact</Button>
              </Link>
              {user.email && <Link to="/dashboard" style={{ textDecoration: 'none', color: "white" }}>
                <Button color="inherit" >Dahsboard</Button>
              </Link>}

            </Box>

          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            {
              user.email ? <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'white', marginRight: "35px", fontWeight: '600' }}>{user.displayName}</span>
                <Button onClick={signingOut} color="inherit">Logout</Button>
              </Box>
                :
                <Button onClick={toLoginPage} color="inherit">Login</Button>
            }
          </Box>

        </Toolbar>
      </AppBar >
    </Box >
  );
};

export default Navigation;