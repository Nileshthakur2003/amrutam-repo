import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Home = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Brown' },
  ];

  return (
    <div className='flex flex-col'>
    <div className="flex flex-row items-center justify-around p-4 mt-20 ">
     <div className='flex flex-col'>
     <Typography variant="h3" gutterBottom> For Doctors' </Typography>
      <Box sx={{ minWidth: 275}}>
      <Card variant="outlined" sx={{background:'#242424'}}> 
        <Link to='/docLogin'>
      <Button variant="contained" color="primary" > 
         <VpnKeyIcon/>  &nbsp;Doctors Login
        </Button>
        </Link>
        <p className='m-2 text-white'>
      Not registered?
      <br />
      <Link to='/docRegister'>Register as a Doctor</Link>
      </p>
      </Card>
      </Box>
     </div>
     <div className='flex flex-col'>
     <Typography variant="h3" gutterBottom> For Patients' </Typography>
      <Box sx={{ minWidth: 275 , color:'white'}}>
      <Card variant="outlined" sx={{background:'#242424'}}>
      <Link to='/patLogin'>
      <Button variant="contained" color="primary"> 
         <VpnKeyIcon/> &nbsp; Patients Login
        </Button>
        </Link>
      <p className='m-2 text-white'>
      Not registered?
      <br />
      <Link to='/patRegister'>Register as a patient</Link>
      </p>
      </Card>
      </Box>
     </div>
    </div>
    <div className='flex flex-row items-center justify-around mt-10 mx-40'>
    
    Welcome to HealthEase, where booking medical appointments is a breeze. Easily connect with top healthcare professionals, schedule appointments, and manage your health effortlessly. Our platform ensures your personal information is secure and offers verified reviews to help you choose the right doctor. Join HealthEase today and take control of your health with confidence and convenience. Your trusted partner in healthcare awaits! 🌟
    </div>
    </div>

  );
};

export default Home;





