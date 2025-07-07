import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  address: { type: String },
  cuisine: [String],
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);
