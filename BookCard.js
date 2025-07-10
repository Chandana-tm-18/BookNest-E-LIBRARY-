import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-3">{book.author}</p>
      <p className="text-gray-700 mb-4 line-clamp-3">{book.description}</p>
      <Link to={\`/read/\${book._id}\`} className="text-indigo-600 font-semibold hover:underline">
        Read More
      </Link>
    </div>
  );
}