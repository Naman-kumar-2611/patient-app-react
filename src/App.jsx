import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BookAppointment from './components/BookAppointment';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/book">Book Appointment</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
