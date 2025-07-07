import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import FoodItemCard from '../../components/customer/FoodItemCard';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all restaurants and find the one by ID
        const res = await axios.get('/restaurants');
        const foundRestaurant = res.data.find(r => r._id === id);
        setRestaurant(foundRestaurant);

        // Fetch the menu of this restaurant
        const menuRes = await axios.get(`/restaurants/${id}/menu`);
        setMenu(menuRes.data);
      } catch (err) {
        console.error('Error fetching restaurant or menu:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!restaurant) return <p className="p-6">Restaurant not found.</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
        <p className="text-gray-500">
          {restaurant.cuisine} • {restaurant.address}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menu.length > 0 ? (
          menu.map((item) => <FoodItemCard key={item._id} item={item} />)
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
