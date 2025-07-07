// src/pages/Customer/Menu.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import FoodItemCard from '../../components/customer/FoodItemCard';

const Menu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/restaurants');
        const foundRestaurant = res.data.find(r => r._id === id);
        setRestaurant(foundRestaurant);

        const menuRes = await axios.get(`/restaurants/${id}/menu`);
        setMenu(menuRes.data);
      } catch (err) {
        console.error('Error loading menu:', err);
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
      {/* Banner */}
      <div className="mb-6 text-center">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-600">{restaurant.cuisine} • {restaurant.address}</p>
      </div>

      {/* Menu Cards */}
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

export default Menu;
