import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserModel = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  roles: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});


export default mongoose.model('User', UserModel);