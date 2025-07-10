import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  pdfUrl: String,
  price: Number,
  ratings: [Number]
});

export default mongoose.model('Book', bookSchema);
