/*const OrderRow = ({ order }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-semibold">Order #{order._id}</h3>
      <p>Status: {order.status}</p>
      <ul className="list-disc ml-5">
        {order.items.map((i, idx) => (
          <li key={idx}>
            {i.menuItem?.name || 'Item'} × {i.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ₹{order.totalPrice}</p>
    </div>
  );
};

export default OrderRow;*/

const OrderRow = ({ order }) => {
  return (
    <div className="border p-4 rounded shadow bg-white flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold text-lg">Order #{order._id.slice(-6)}</h3>
        <p className="text-sm text-gray-600">Status: <span className="capitalize">{order.status}</span></p>
        
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {order.items.map((i, idx) => (
            <li key={idx}>
              {i.menuItem?.name || 'Item'} × {i.quantity}
            </li>
          ))}
        </ul>

        <p className="font-medium">Total: ₹{order.totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderRow;
