// server/controllers/restaurantController.js

import Restaurant from '../models/Restaurant.js';
import MenuItem from '../models/MenuItem.js'; // ✅ Add this line

// 🔹 Admin: Get all restaurants
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch restaurants', error: error.message });
  }
};

// 🔹 Customer: Get only public list
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get restaurants', error: error.message });
  }
};

// 🔹 Admin: Create a restaurant
export const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const saved = await newRestaurant.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Restaurant creation failed', error: error.message });
  }
};

// 🔹 Admin: Update a restaurant
export const updateRestaurant = async (req, res) => {
  try {
    const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

// 🔹 Admin: Delete a restaurant
export const deleteRestaurant = async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Deletion failed', error: error.message });
  }
};

// 🔹 Customer: Get menu of a restaurant
export const getRestaurantMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuItem.find({ restaurant: id });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch menu', error: error.message });
  }
};

// ✅ NEW: getMenuItemsByRestaurantId (used in routes)
export const getMenuItemsByRestaurantId = async (req, res) => {
  try {
    const { id } = req.params;
    const items = await MenuItem.find({ restaurant: id });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch menu items', error: error.message });
  }
};
