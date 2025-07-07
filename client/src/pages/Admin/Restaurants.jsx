
/*import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    image: "", // ✅ added image field
  });
  const [editId, setEditId] = useState(null);

  const fetchRestaurants = async () => {
    const res = await axios.get("/admin/restaurants");
    setRestaurants(res.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`/admin/restaurants/${editId}`, formData);
    } else {
      await axios.post("/admin/restaurants", formData);
    }
    setFormData({ name: "", address: "", cuisine: "", image: "" });
    setEditId(null);
    fetchRestaurants();
  };

  const handleEdit = (restaurant) => {
    setFormData({
      name: restaurant.name,
      address: restaurant.address,
      cuisine: restaurant.cuisine,
      image: restaurant.image || "", // ✅ pre-fill image
    });
    setEditId(restaurant._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/admin/restaurants/${id}`);
    fetchRestaurants();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Restaurants</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 w-full"
          required
        />
        <input
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          placeholder="Cuisine"
          className="border p-2 w-full"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          {editId ? "Update" : "Add"} Restaurant
        </button>
      </form>

      <ul className="space-y-2">
        {restaurants.map((rest) => (
          <li
            key={rest._id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{rest.name}</h4>
              <p>
                {rest.address} - {rest.cuisine}
              </p>
              {rest.image && (
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-32 h-20 object-cover mt-2 rounded"
                />
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(rest)}
                className="bg-yellow-400 px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(rest._id)}
                className="bg-red-500 px-3 py-1 text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;*/
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import RestaurantRow from "../../components/admin/RestaurantRow"; // ✅ import the component

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchRestaurants = async () => {
    const res = await axios.get("/admin/restaurants");
    setRestaurants(res.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`/admin/restaurants/${editId}`, formData);
    } else {
      await axios.post("/admin/restaurants", formData);
    }
    setFormData({ name: "", address: "", cuisine: "", image: "" });
    setEditId(null);
    fetchRestaurants();
  };

  const handleEdit = (restaurant) => {
    setFormData({
      name: restaurant.name,
      address: restaurant.address,
      cuisine: restaurant.cuisine,
      image: restaurant.image || "",
    });
    setEditId(restaurant._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/admin/restaurants/${id}`);
    fetchRestaurants();
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Manage Restaurants</h2>

      <form onSubmit={handleSubmit} className="mb-6 grid gap-3 md:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          placeholder="Cuisine"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {editId ? "Update" : "Add"} Restaurant
        </button>
      </form>

      <ul className="space-y-4">
        {restaurants.map((rest) => (
          <RestaurantRow
            key={rest._id}
            restaurant={rest}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
