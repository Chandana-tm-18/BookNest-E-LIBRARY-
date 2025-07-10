import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-xl font-bold hover:text-gray-200">BookNest</Link>
      <div>
        <Link to="/" className="mx-2 hover:text-gray-300">Home</Link>
        <Link to="/login" className="mx-2 hover:text-gray-300">Login</Link>
      </div>
    </nav>
  );
}