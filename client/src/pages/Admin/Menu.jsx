
/*import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    restaurant: "",
    image: "", // ✅ added image field
  });
  const [restaurants, setRestaurants] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMenu();
    fetchRestaurants();
  }, []);

  const fetchMenu = async () => {
    const res = await axios.get("/admin/menu");
    setMenuItems(res.data);
  };

  const fetchRestaurants = async () => {
    const res = await axios.get("/admin/restaurants");
    setRestaurants(res.data);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: Number(formData.price),
    };
    if (editId) {
      await axios.put(`/admin/menu/${editId}`, payload);
    } else {
      await axios.post("/admin/menu", payload);
    }
    setFormData({ name: "", price: "", restaurant: "", image: "" });
    setEditId(null);
    fetchMenu();
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      price: item.price,
      restaurant: item.restaurant?._id || item.restaurant,
      image: item.image || "", // ✅ prefill image
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/admin/menu/${id}`);
    fetchMenu();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Menu</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="border p-2 w-full"
          required
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 w-full"
          required
        />
        <select
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select Restaurant</option>
          {restaurants.map((r) => (
            <option key={r._id} value={r._id}>
              {r.name}
            </option>
          ))}
        </select>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          {editId ? "Update" : "Add"} Item
        </button>
      </form>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item._id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">
                {item.name} - ₹{item.price}
              </h4>
              <p>Restaurant: {item.restaurant?.name || "Unknown"}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-20 object-cover mt-2 rounded"
                />
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-400 px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
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

export default Menu;*/
// client/src/pages/Admin/Menu.jsx
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import MenuItemRow from "../../components/admin/MenuItemRow";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    restaurant: "",
    image: "",
  });
  const [restaurants, setRestaurants] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMenu();
    fetchRestaurants();
  }, []);

  const fetchMenu = async () => {
    const res = await axios.get("/admin/menu");
    setMenuItems(res.data);
  };

  const fetchRestaurants = async () => {
    const res = await axios.get("/admin/restaurants");
    setRestaurants(res.data);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: Number(formData.price),
    };
    if (editId) {
      await axios.put(`/admin/menu/${editId}`, payload);
    } else {
      await axios.post("/admin/menu", payload);
    }
    setFormData({ name: "", price: "", restaurant: "", image: "" });
    setEditId(null);
    fetchMenu();
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      price: item.price,
      restaurant: item.restaurant?._id || item.restaurant,
      image: item.image || "",
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/admin/menu/${id}`);
    fetchMenu();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Manage Menu</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 w-full rounded"
          required
        />
        <select
  name="restaurant"
  value={formData.restaurant}
  onChange={handleChange}
  className="border p-2 w-full max-w-full rounded text-sm sm:text-base"
  required
>
  <option value="">Select Restaurant</option>
  {restaurants.map((r) => (
    <option key={r._id} value={r._id}>
      {r.name}
    </option>
  ))}
</select>

   
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full rounded"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          {editId ? "Update" : "Add"} Item
        </button>
      </form>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item._id}>
            <MenuItemRow item={item} onEdit={handleEdit} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
