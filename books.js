import express from 'express';
import auth from '../middleware/auth.js';
import Book from '../models/Book.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get('/:id', auth, async (req, res) => {
  const book = await Book.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (!user.purchasedBooks.includes(book._id)) 
    return res.status(403).json({ error: 'Purchase required' });
  res.json(book);
});

export default router;
