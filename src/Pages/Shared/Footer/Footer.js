import { Grid, Typography, Button, InputBase } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <hr style={{ border: '1px solid #f2f2f2' }} />
      <Grid container spacing={3} sx={{ py: 15, px: 5 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ fontFamily: 'cursive' }}>
            EX WATCH
          </Typography>
          <Typography variant="subtitle" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam asperiores nostrum. Dolore nihil eum ad vero praesentium, provident
          </Typography>
          <Box sx={{ mt: 2 }}>
            {/* facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="38" height="38"
              viewBox="0 0 172 172"
              style={{ fill: '#000000', cursor: 'pointer' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM109.97107,63.06667h-9.91293c-6.16907,0 -8.3248,3.25653 -8.3248,9.84987v7.35013h18.08293l-2.45387,17.2h-15.62907v45.58c-1.88627,0.18347 -3.79547,0.28667 -5.73333,0.28667c-3.92733,0 -7.76293,-0.40133 -11.46667,-1.1524v-44.71427h-17.2v-17.2h17.2v-9.2364c0,-17.48667 8.51973,-25.1636 23.05373,-25.1636c6.96027,0 10.64107,0.516 12.384,0.75107z"></path></g></g></svg>



            {/* twitter */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="38" height="38"
              viewBox="0 0 172 172"
              style={{ fill: '#000000', cursor: 'pointer' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667z" fill="#a3e1ee"></path><path d="M135.60767,55.77817c-3.827,1.69492 -8.67167,3.2895 -13.01467,3.81625c4.41825,-2.61942 11.42367,-8.07325 13.01467,-13.01108c-4.12442,2.42592 -11.58492,5.01308 -16.45467,5.95192c-3.88433,-4.12083 -9.42775,-5.95192 -15.56958,-5.95192c-11.79992,0 -20.02725,9.9975 -20.02725,21.68992v8.67525c-17.3505,0 -34.26742,-13.21533 -44.79525,-26.02575c-1.85258,3.12825 -2.89175,6.78683 -2.89175,10.65683c0,7.8905 7.24908,15.89925 12.986,19.70475c-3.50092,-0.1075 -10.13008,-2.78067 -13.01467,-4.33942c0,0.06808 0,0.15767 0,0.24725c0,10.26625 7.20608,17.23942 16.97067,19.18158c-1.7845,0.49092 -3.956,2.26108 -12.3195,2.26108c2.71617,8.39217 16.36508,12.83192 25.714,13.01467c-7.31358,5.66883 -20.35333,8.67525 -30.36517,8.67525c-1.73075,0 -2.666,0.09675 -4.33942,-0.10033c9.44925,5.98775 22.64308,8.77558 34.70458,8.77558c39.28767,0 60.72675,-30.00683 60.72675,-57.99625c0,-0.92092 -0.02867,-3.999 -0.07883,-4.902c4.19967,-2.95625 5.89817,-6.05583 8.75408,-10.32358" fill="#f3f2f2"></path><path d="M83.55617,76.9485c0,0 -0.57692,22.55708 -17.3505,34.701c0,0 34.14558,-6.04508 34.14558,-36.40667c0,0 -8.07325,1.82392 -16.79508,1.70567z" fill="#ffffff"></path></g></g></svg>


            {/* linkedin */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="38" height="38"
              viewBox="0 0 172 172"
              style={{ fill: '#000000', cursor: 'pointer' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z" fill="#4d91e3"></path><path d="M50.16667,68.08333h14.33333v53.75h-14.33333zM57.29033,60.91667h-0.07883c-4.2785,0 -7.04483,-3.18917 -7.04483,-7.17025c0,-4.06708 2.85233,-7.16308 7.20608,-7.16308c4.36092,0 7.04483,3.096 7.12725,7.16308c0,3.98108 -2.76633,7.17025 -7.20967,7.17025zM125.41667,87.79167c0,-10.88617 -8.82217,-19.70833 -19.70833,-19.70833c-6.67217,0 -12.55958,3.32533 -16.125,8.39933v-8.39933h-14.33333v53.75h14.33333v-28.66667c0,-5.93758 4.81242,-10.75 10.75,-10.75c5.93758,0 10.75,4.81242 10.75,10.75v28.66667h14.33333c0,0 0,-32.53308 0,-34.04167z" fill="#ffffff"></path></g></g></svg>


            {/* instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="35" height="38"
              viewBox="0 0 172 172"
              style={{ fill: '#000000', cursor: 'pointer' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#de3891"><path d="M86,11.46667c-41.09653,0 -74.53333,33.4368 -74.53333,74.53333c0,41.09653 33.4368,74.53333 74.53333,74.53333c41.09653,0 74.53333,-33.4368 74.53333,-74.53333c0,-41.09653 -33.4368,-74.53333 -74.53333,-74.53333zM66.88516,34.4h38.21849c17.91667,0 32.49636,14.57422 32.49636,32.48516v38.21849c0,17.91667 -14.57423,32.49636 -32.48516,32.49636h-38.21849c-17.91667,0 -32.49636,-14.57423 -32.49636,-32.48516v-38.21849c0,-17.91667 14.57422,-32.49636 32.48516,-32.49636zM66.88516,45.86667c-11.58707,0 -21.01849,9.43689 -21.01849,21.02969v38.21849c0,11.58707 9.43689,21.01849 21.02969,21.01849h38.21849c11.58707,0 21.01849,-9.43689 21.01849,-21.02969v-38.21849c0,-11.58707 -9.43689,-21.01849 -21.02969,-21.01849zM112.76302,55.41849c2.10987,0 3.81849,1.70862 3.81849,3.81849c0,2.10987 -1.70862,3.82969 -3.81849,3.82969c-2.10987,0 -3.82969,-1.71982 -3.82969,-3.82969c0,-2.10987 1.71982,-3.81849 3.82969,-3.81849zM86,57.33333c15.8068,0 28.66667,12.85987 28.66667,28.66667c0,15.8068 -12.85987,28.66667 -28.66667,28.66667c-15.8068,0 -28.66667,-12.85987 -28.66667,-28.66667c0,-15.8068 12.85987,-28.66667 28.66667,-28.66667zM86,68.8c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2z"></path></g></g></svg>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} >
          <ul>
            <li>
              <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" style={{ textDecoration: 'none' }}> Contact Us</Link>
            </li>
            <li>
              <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/explore" style={{ textDecoration: 'none' }}>Explore</Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none' }}>FAQ</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">
            Newsleter
          </Typography>
          <Box sx={{ display: 'flex', my: 1 }}>
            <InputBase
              sx={{ flex: 1, background: '#f2f2f2', py: 1, px: 2 }}
              placeholder="Enter your email"
            />
            <Button variant="contained" className="border-none" sx={{ px: 4, marginRight: '0' }}>SUBSCRIBE</Button>
          </Box>
          <img src="https://img.icons8.com/color/49/000000/visa.png" alt="" />

          <img src="https://img.icons8.com/cotton/47/000000/paypal--v1.png" alt="" />
          <img src="https://img.icons8.com/color/50/000000/stripe.png" alt="" />
          <img src="https://img.icons8.com/plasticine/50/000000/discover.png" alt="" />


        </Grid>
      </Grid>
      <Box sx={{ background: '#5567ee', py: 3, textAlign: 'center' }}>
        <Typography variant="paragraph" sx={{ color: 'white' }}>
          Copyright <i style={{ fontSize: '12px' }} class="far fa-copyright"></i> 2021 | <span style={{ color: '#f2f2f2' }}>Design by <small>Enamul hasan</small></span>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;