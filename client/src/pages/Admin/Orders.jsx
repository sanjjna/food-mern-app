// client/src/pages/Admin/Orders.jsx
/*import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("/admin/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    await axios.put(`/admin/orders/${id}`, { status });
    fetchOrders();
  };

  const handleDelete = async id => {
    await axios.delete(`/admin/orders/${id}`);
    fetchOrders();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order._id} className="border p-4 rounded shadow">
            <p><strong>User:</strong> {order.user?.name}</p>
            <p><strong>Total:</strong> ₹{order.totalPrice}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <ul className="pl-4 list-disc mt-2">
              {order.items.map((item, idx) => (
                <li key={idx}>{item.menuItem?.name} × {item.quantity} — ₹{item.menuItem?.price * item.quantity}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex space-x-2">
              <button onClick={() => handleStatusUpdate(order._id, "Preparing")} className="bg-yellow-400 px-3 py-1">Preparing</button>
              <button onClick={() => handleStatusUpdate(order._id, "Delivered")} className="bg-green-500 px-3 py-1 text-white">Delivered</button>
              <button onClick={() => handleDelete(order._id)} className="bg-red-600 px-3 py-1 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;*/


import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("/admin/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    await axios.put(`/admin/orders/${id}`, { status });
    fetchOrders();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/admin/orders/${id}`);
    fetchOrders();
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Orders</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-md shadow p-4 flex flex-col gap-4 bg-white"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div>
                <p className="text-sm">
                  <strong>User:</strong> {order.user?.name || "Unknown"}
                </p>
                <p className="text-sm">
                  <strong>Total:</strong> ₹{order.totalPrice}
                </p>
                <p className="text-sm capitalize">
                  <strong>Status:</strong> {order.status}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleStatusUpdate(order._id, "Preparing")}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Preparing
                </button>
                <button
                  onClick={() => handleStatusUpdate(order._id, "Delivered")}
                  className="bg-green-500 px-3 py-1 text-white rounded hover:bg-green-600"
                >
                  Delivered
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-600 px-3 py-1 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700">
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.menuItem?.name || "Item"} × {item.quantity} — ₹
                  {item.menuItem?.price * item.quantity || 0}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
