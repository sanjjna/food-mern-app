
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, total } = useCart();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

 
const handleOrder = async () => {
  if (!user) return navigate('/login');

  try {
    const restaurantId = cartItems[0]?.restaurant;

    if (!restaurantId) {
      setMessage('Restaurant info missing in cart items.');
      return;
    }

  const payload = {
  restaurantId,
  totalPrice: total, // ✅ this was missing before
  deliveryAddress: '123 Demo Street',
  items: cartItems.map(item => ({
    menuItem: item._id,
    quantity: item.qty
  }))
};


    await axios.post('/orders', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    clearCart();
    setMessage('Order placed successfully!');
  } catch (err) {
    console.error('Order error:', err.response?.data || err.message);
    setMessage('Failed to place order.');
  }
};

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y">
            {cartItems.map(item => (
              <li key={item._id} className="py-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">₹{item.price} × {item.qty}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <span className="font-bold text-lg">Total: ₹{total}</span>
            <button onClick={handleOrder} className="bg-green-600 text-white px-4 py-2 rounded">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
