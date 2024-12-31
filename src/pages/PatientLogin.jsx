import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// PatientLoginDialog Component
const PatientLoginDialog = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    onLogin({ username, password });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Patient Login</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};



// PatientLogin Component
const PatientLogin = () => {
  const [open, setOpen] = useState(true); // Set initial state to open

  const handleClose = () => {
    window.location.href = '/'; // Replace with your desired URL
  };
  
  const handleLogin = (credentials) => {
    console.log('Logging in with credentials:', credentials);
    // Perform actual login logic here
    handleClose();
  };

  return (
    <div>
      <PatientLoginDialog open={open} onClose={handleClose} onLogin={handleLogin} />
    </div>
  );
};

export default PatientLogin;
