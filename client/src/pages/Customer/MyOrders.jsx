import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

const MyOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get('/orders/my-orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setOrders(res.data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) return <p className="p-6">Please login to view your orders.</p>;
  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="border p-4 rounded shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 text-sm">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
                <span className="font-bold">₹{order.totalPrice}</span>
              </div>
              <ul className="ml-4 list-disc text-sm">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.menuItem?.name} × {item.quantity} — ₹{item.menuItem?.price * item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
