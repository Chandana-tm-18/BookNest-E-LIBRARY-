import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}