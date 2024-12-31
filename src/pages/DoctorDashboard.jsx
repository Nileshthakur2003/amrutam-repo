import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography, Card, CardContent } from '@mui/material';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctorInfo, setDoctorInfo] = useState({});

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const base_addr = "http://localhost:3000/";
        const doctorResponse = await axios.get(base_addr+'/api/doctor'); // Fetch doctor info
        setDoctorInfo(doctorResponse.data);
      } catch (error) {
        console.error('Error fetching doctor info:', error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const base_addr = "http://localhost:3000/";
        const appointmentsResponse = await axios.get(base_addr+'/api/doctors/appointments'); // Fetch doctor's appointments
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    const fetchPatients = async () => {
      try {
        const base_addr = "http://localhost:3000/";
        const patientsResponse = await axios.get(base_addr+'/api/doctor/patients'); // Fetch doctor's patients
        setPatients(patientsResponse.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchDoctorData();
    fetchAppointments();
    fetchPatients();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Doctor Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Welcome, Dr. {doctorInfo.name}
              </Typography>
              <Typography variant="body2">
                Specialization: {doctorInfo.specialization}
              </Typography>
              <Typography variant="body2">
                Fees: ${doctorInfo.fees}
              </Typography>
              <Typography variant="body2">
                Discount on First Visit: {doctorInfo.discountOnFirstVisit}%
              </Typography>
              <Typography variant="body2">
                Wallet Balance: ${doctorInfo.walletBalance}
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
                  Appointment with {appointment.patientName}
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
            Your Patients
          </Typography>
          <Grid container spacing={2}>
            {patients.map((patient) => (
              <Grid item xs={12} sm={6} md={4} key={patient.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {patient.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Age: {patient.age}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Address: {patient.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Gender: {patient.gender}
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

export default DoctorDashboard;
