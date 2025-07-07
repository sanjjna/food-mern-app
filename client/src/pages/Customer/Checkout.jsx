
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useState } from 'react';

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const { user } = useAuth(); // assuming this gives { token, ... }
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOrder = async () => {
    if (!address || !phone) {
      return setError('Please enter address and phone number');
    }

    setLoading(true);
    try {
      await axios.post(
        '/orders',
        {
          items: cartItems,
          total,
          address,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      clearCart();
      navigate('/orders');
    } catch (err) {
      console.error(err);
      setError('Order failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between border-b py-2">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold mb-4">Total: ₹{total}</p>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              className="w-full border rounded p-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              className="w-full border rounded p-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleOrder}
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
