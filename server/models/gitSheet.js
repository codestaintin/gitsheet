import mongoose from 'mongoose';

const { Schema } = mongoose;

const GitSheetModel = new Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  command: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  keywords: [String]
});

export default mongoose.model('GitSheet', GitSheetModel);