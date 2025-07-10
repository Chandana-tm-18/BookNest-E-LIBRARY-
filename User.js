import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  purchasedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  progress: { type: Map, of: Number }
});

export default mongoose.model('User', userSchema);
