// ✅ server/routes/adminRoutes.js
import  express from "express";
const router = express.Router();
import {
   getRestaurants,
  getRestaurantMenu,
  getAllRestaurants,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from "../controllers/restaurantController.js";
import {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,}
from "../controllers/menuItemController.js";
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { getAdminStats } from '../controllers/adminController.js';

// All routes here require admin access
router.use(protect, isAdmin);

// 🔹 Restaurant Management
router.route("/restaurants")
  .get(getAllRestaurants)
  .post(createRestaurant);

router.route("/restaurants/:id")
  .put(updateRestaurant)
  .delete(deleteRestaurant);

// 🔹 Menu Item Management
router.route("/menu")
  .get(getAllMenuItems)
  .post(createMenuItem);

router.route("/menu/:id")
  .put(updateMenuItem)
  .delete(deleteMenuItem);

// 🔹 Orders Management
router.route("/orders")
  .get(getAllOrders);

router.route("/orders/:id")
  .put(updateOrderStatus)
  .delete(deleteOrder);

router.get('/stats', getAdminStats);

export default router;
