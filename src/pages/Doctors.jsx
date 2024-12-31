import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box } from '@mui/material';

const backend_url =  "http://localhost:3000";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.post(backend_url + '/api/doctors/getAllDoctors');
        setDoctors(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div style={{ margin:'2.5vw',overflowY: 'auto', overflowX: 'hidden', width: '95vw' }}>
      <div className='flex items-center justify-center m-10'>
        <Typography variant="h3" component="div">
          Doctors
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={8} md={6} key={doctor.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Specialization: {doctor.specialization}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Fees: ${doctor.fees}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discount on First Visit: {doctor.discountOnFirstVisit}%
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" color="secondary">
                  More Info
                </Button>
                <Button size="small" color="primary">
                  Book Appointment
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DoctorList;
