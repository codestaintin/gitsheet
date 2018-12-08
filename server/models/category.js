import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategoryModel = new Schema({
  name: {
    type: String,
    trim: true
  },
  gitCheats: [{ type: Schema.Types.ObjectId, ref: 'GitSheet' }]
});

export default mongoose.model('Category', CategoryModel);