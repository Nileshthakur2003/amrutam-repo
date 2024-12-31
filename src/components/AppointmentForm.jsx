import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = ({ doctorId }) => {
  const [patientName, setPatientName] = useState('');
  const [isFirstTime, setIsFirstTime] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const discount = isFirstTime ? 0.5 : 0;
    const response = await axios.post('/api/appointments', { doctorId, patientName, discount });
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">First-time consultation?</label>
        <input
          type="checkbox"
          checked={isFirstTime}
          onChange={() => setIsFirstTime(!isFirstTime)}
          className="mt-1 block w-full"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
