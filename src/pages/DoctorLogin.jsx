import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const DoctorLoginDialog = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Doctor Login</DialogTitle>
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

const DoctorLogin = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    window.location.href = '/';
  };

  const handleLogin = async (credentials) => {
    const { username, password } = credentials;

    alert(JSON.stringify(credentials));

    try {
      const response = await axios.post('http://localhost:3000/api/users/verifyUser', { username , password });
      const { token } = response.data; // Ensure you are accessing response.data
      localStorage.setItem('medconlogintoken', token);
      // Store the token in localStorage
      handleClose(); // Close the login dialog and redirect
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div>
      <DoctorLoginDialog open={open} onClose={handleClose} onLogin={handleLogin} />
    </div>
  );
};

export default DoctorLogin;
