import Order from '../models/Order.js';

// 🔹 Customer: Place a new order
export const placeOrder = async (req, res) => {
  try {
    const { items, restaurantId, totalPrice, deliveryAddress } = req.body;

    if (!items?.length || !restaurantId || !deliveryAddress || !totalPrice) {
      return res.status(400).json({ message: 'Missing order fields' });
    }

    const order = new Order({
      user : req.user._id,
      restaurant: restaurantId,
      items,
      totalPrice,
      deliveryAddress,
      status: 'placed', // ✅ use correct enum
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Order placement failed', error: error.message });
  }
};


// 🔹 Customer: Get own orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('items.menuItem', 'name price')
    
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
     console.error('Order fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

// 🔹 Admin: Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
     .sort({ createdAt: -1 })
      .populate('user', 'name email')
     .populate('items.menuItem')

.populate('restaurant', 'name')


    res.status(200).json(orders);
  } catch (error) {
     console.error('Admin orders fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch all orders', error: error.message });
  }
};

// 🔹 Admin: Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
};
// 🔹 Admin: Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order status', error: error.message });
  }
};
