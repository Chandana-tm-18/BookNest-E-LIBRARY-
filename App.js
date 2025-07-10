import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookReader from './pages/BookReader';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/read/:id" element={<BookReader />} />
      </Routes>
    </BrowserRouter>
  );
}
