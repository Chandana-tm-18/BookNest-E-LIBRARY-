import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookReader() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl">Reading Book {id}</h1>
    </div>
  );
}
