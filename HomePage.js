import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      {books.map(book => (
        <div key={book._id} className="border p-2 mb-2">
          <h2 className="text-xl">{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
