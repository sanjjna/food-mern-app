// server/routes/restaurantRoutes.js

import express from "express";
import {
  getRestaurants,
  getRestaurantMenu,
  getMenuItemsByRestaurantId, // ✅ This should now exist
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";

const router = express.Router();

// Customer
router.get("/", getRestaurants);
router.get("/:id/menu", getRestaurantMenu);
router.get("/restaurant/:id/menu-items", getMenuItemsByRestaurantId); // example route

// Admin
router.get("/admin/all", getAllRestaurants);
router.post("/admin/create", createRestaurant);
router.put("/admin/:id", updateRestaurant);
router.delete("/admin/:id", deleteRestaurant);

export default router;
