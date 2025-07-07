import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const FoodItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState('');

  const handleClick = () => {
    console.log('Adding to cart:', item); // Optional debug
    addToCart(item);
    setMessage('Item added to cart ✅');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div className="border rounded shadow-sm hover:shadow-md transition">
      <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-t" />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-green-600">₹{item.price}</span>
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Add +
          </button>
        </div>

        {message && (
          <p className="text-sm text-green-600 mt-2">{message}</p>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
