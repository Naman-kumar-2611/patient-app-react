import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <p>Welcome! Here are your upcoming appointments.</p>
      <ul>
        <li>Dr. Smith - 12 Aug 2025, 3:00 PM</li>
        <li>Dr. Taylor - 20 Aug 2025, 10:00 AM</li>
      </ul>
    </div>
  );
}
