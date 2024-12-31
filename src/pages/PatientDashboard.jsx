import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography, Card, CardContent, Alert } from '@mui/material';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base_addr = "http://localhost:3000/";
        const [userResponse, appointmentsResponse, doctorsResponse] = await Promise.all([
          axios.get(base_addr+'/api/user'), // Fetch user info
          axios.get(base_addr+'/api/appointments'), // Fetch user appointments
          axios.get(base_addr+'/api/doctors') // Fetch doctor details
        ]);

        setUserInfo(userResponse.data);
        setAppointments(appointmentsResponse.data);
        setDoctorDetails(doctorsResponse.data);
      } catch (error) {
        setFetchError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Dashboard
      </Typography>
      {fetchError && <Alert severity="error">{fetchError}</Alert>}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Welcome, {userInfo.name}
              </Typography>
              <Typography variant="body2">
                Age: {userInfo.age}
              </Typography>
              <Typography variant="body2">
                Address: {userInfo.address}
              </Typography>
              <Typography variant="body2">
                Gender: {userInfo.gender}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Upcoming Appointments
          </Typography>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <Paper key={appointment.id} style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="body1">
                  Appointment with Dr. {appointment.doctorName}
                </Typography>
                <Typography variant="body2">
                  Date: {appointment.date}
                </Typography>
                <Typography variant="body2">
                  Time: {appointment.time}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="body2">No upcoming appointments.</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Your Doctors
          </Typography>
          <Grid container spacing={2}>
            {doctorDetails.map((doctor) => (
              <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                <Card>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDashboard;
