/*const MenuItemRow = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.description}</p>
      <p className="text-green-600 font-bold">₹{item.price}</p>
    </div>
  );
};

export default MenuItemRow;*/
// client/src/components/Admin/MenuItemRow.jsx
const MenuItemRow = ({ item, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full sm:w-32 h-20 object-cover rounded"
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{item.name} - ₹{item.price}</h3>
          <p className="text-sm text-gray-500">
            Restaurant: {item.restaurant?.name || "Unknown"}
          </p>
        </div>
      </div>

      <div className="flex gap-2 self-end sm:self-auto">
        <button
          onClick={() => onEdit(item)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MenuItemRow;
