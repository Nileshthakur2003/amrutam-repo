import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// PatientRegisterDialog Component
const PatientRegisterDialog = ({ open, onClose, onRegister }) => {
  const [name, setName] = useState('');
  const [wallet, setWallet] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    onRegister({ name, wallet, age, address, gender });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Patient Registration</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Wallet"
          type="number"
          fullWidth
          variant="outlined"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Age"
          type="number"
          fullWidth
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Address"
          type="text"
          fullWidth
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Gender"
          type="text"
          fullWidth
          variant="outlined"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRegister} color="primary">
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Main Component to handle patient registration
const PatientRegister = () => {
  const [openPatientRegister, setOpenPatientRegister] = useState(true); // Set initial state to open

  useEffect(() => {
    setOpenPatientRegister(true); // Open dialog when component mounts
  }, []);

  const handleClose = () => {
    window.location.href = '/'; // Redirect to home page
  };

  const handlePatientRegister = (data) => {
    console.log('Registering Patient:', data);
    setOpenPatientRegister(false);
    // Perform registration logic here
    window.location.href = '/'; // Redirect to home page after registration
  };

  return (
    <PatientRegisterDialog open={openPatientRegister} onClose={handleClose} onRegister={handlePatientRegister} />
  );
};

export default PatientRegister;
