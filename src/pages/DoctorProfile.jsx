import React from 'react';
import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

const DoctorProfile = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Doctor Profile {id}</h2>
      <AppointmentForm doctorId={id} />
    </div>
  );
};

export default DoctorProfile;
