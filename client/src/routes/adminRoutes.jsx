/*import { Route } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard';
import Restaurants from '../pages/Admin/Restaurants';
import Menu from '../pages/Admin/Menu';
import Orders from '../pages/Admin/Orders';

const adminRoutes = [
  <Route key="admin-dashboard" path="/admin/dashboard" element={<Dashboard />} />,
  <Route key="admin-restaurants" path="/admin/restaurants" element={<Restaurants />} />,
  <Route key="admin-menu" path="/admin/menu" element={<Menu />} />,
  <Route key="admin-orders" path="/admin/orders" element={<Orders />} />,
];

export default adminRoutes;*/
// src/routes/adminRoutes.jsx
import { Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import Restaurants from "../pages/Admin/Restaurants";
import Menu from "../pages/Admin/Menu";
import Orders from "../pages/Admin/Orders";
import { AdminRoute } from "../router"; // make sure router.js exports AdminRoute

const adminRoutes = [
  <Route element={<AdminRoute />} key="admin-protect">
    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/restaurants" element={<Restaurants />} />
    <Route path="/admin/menu" element={<Menu />} />
    <Route path="/admin/orders" element={<Orders />} />
  </Route>,
];

export default adminRoutes;
