import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, enum: ['pending','placed', 'preparing', 'delivered'], default: 'placed' },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
