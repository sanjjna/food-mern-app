import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
return(
  <Link to={`/restaurant/${restaurant._id}/menu`} className="block shadow-md rounded overflow-hidden hover:shadow-lg transition">
    <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{restaurant.name}</h3>
      <p className="text-gray-500">{restaurant.cuisine}</p>
    </div>
  </Link>
);
};

export default RestaurantCard;
