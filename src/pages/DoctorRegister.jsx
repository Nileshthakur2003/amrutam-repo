import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// DoctorRegisterDialog Component
const DoctorRegisterDialog = ({ open, onClose, onRegister }) => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [fees, setFees] = useState('');
  const [discountOnFirstVisit, setDiscountOnFirstVisit] = useState('');
  const [walletBalance, setWalletBalance] = useState('');

  const handleRegister = () => {
    onRegister({ name, specialization, fees, discountOnFirstVisit, walletBalance });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Doctor Registration</DialogTitle>
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
          label="Specialization"
          type="text"
          fullWidth
          variant="outlined"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Fees"
          type="number"
          fullWidth
          variant="outlined"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Discount on First Visit"
          type="number"
          fullWidth
          variant="outlined"
          value={discountOnFirstVisit}
          onChange={(e) => setDiscountOnFirstVisit(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Wallet Balance"
          type="number"
          fullWidth
          variant="outlined"
          value={walletBalance}
          onChange={(e) => setWalletBalance(e.target.value)}
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

// Main Component to handle doctor registration
const DoctorRegister = () => {
  const [openDoctorRegister, setOpenDoctorRegister] = useState(true); // Set initial state to open

  useEffect(() => {
    setOpenDoctorRegister(true); // Open dialog when component mounts
  }, []);

  const handleClose = () => {
    window.location.href = '/'; // Redirect to home page
  };

  const handleDoctorRegister = (data) => {
    console.log('Registering Doctor:', data);
    setOpenDoctorRegister(false);
    // Perform registration logic here

    
    window.location.href = '/'; // Redirect to home page after registration
  };

  return (
    <DoctorRegisterDialog open={openDoctorRegister} onClose={handleClose} onRegister={handleDoctorRegister} />
  );
};

export default DoctorRegister;
