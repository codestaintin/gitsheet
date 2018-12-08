import mongoose from 'mongoose';

const { Schema } = mongoose;

const GitCheatModel = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
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

export default mongoose.model('GitSheet', GitCheatModel);