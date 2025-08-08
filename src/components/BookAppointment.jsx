import React, { useState } from 'react';

export default function BookAppointment() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${doctor} on ${date} at ${time}`);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor:</label>
          <input value={doctor} onChange={(e) => setDoctor(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}
