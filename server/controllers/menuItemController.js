import MenuItem from "../models/MenuItem.js";

// @desc    Get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().populate("restaurant");
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch menu items", error: err.message });
  }
};

// @desc    Create new menu item
export const createMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to create menu item", error: err.message });
  }
};

// @desc    Update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update menu item", error: err.message });
  }
};

// @desc    Delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete menu item", error: err.message });
  }
};
// @desc    Get menu items for a specific restaurant
export const getMenuItemsByRestaurantId = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const items = await MenuItem.find({ restaurant: restaurantId });

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch restaurant menu", error: err.message });
  }
};

