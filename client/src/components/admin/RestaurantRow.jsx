/*const RestaurantRow = ({ restaurant }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{restaurant.name}</h3>
      <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.address}</p>
    </div>
  );
};

export default RestaurantRow;*/
/*const RestaurantRow = ({ restaurant, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {restaurant.image && (
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-32 h-24 object-cover rounded aspect-[4/3]"
          />
        )}
        <div>
          <h4 className="font-semibold text-lg">{restaurant.name}</h4>
          <p className="text-gray-600 text-sm">
            {restaurant.address} • {restaurant.cuisine}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(restaurant)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(restaurant._id)}
          className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RestaurantRow;*/

const RestaurantRow = ({ restaurant, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow flex flex-col sm:flex-row sm:items-center gap-4">
      {restaurant.image && (
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full sm:w-32 h-24 object-cover rounded aspect-[4/3]"
        />
      )}

      <div className="flex-1">
        <h3 className="font-bold text-lg">{restaurant.name}</h3>
        <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.address}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(restaurant)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(restaurant._id)}
          className="bg-red-500 px-3 py-1 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RestaurantRow;
