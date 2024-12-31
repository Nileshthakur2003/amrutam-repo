import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import './index.css';
import DoctorLogin from './pages/DoctorLogin';
import PatientLogin from './pages/PatientLogin';
import DoctorRegister from './pages/DoctorRegister';
import PatientRegister from './pages/PatientRegister';
import DoctorList from './pages/Doctors';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='docLogin' element={<DoctorLogin />} />
          <Route path='patLogin' element={<PatientLogin />} />
          <Route path='docRegister' element={<DoctorRegister />} />
          <Route path='patRegister' element={<PatientRegister />} />
          <Route path='doctorsList' element={<DoctorList />} />
          <Route path='patientDash' element={<PatientDashboard />} />
          <Route path='doctorsDash' element={<DoctorDashboard />} />
          
          // Patient Dashboard
          // Doctor Dashboard
          // Patient Analytics
          // Doctor Analytics


        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
