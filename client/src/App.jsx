/*import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Customer/Home';
import RestaurantDetails from './pages/Customer/RestaurantDetails';
import Cart from './pages/Customer/Cart';
import Checkout from './pages/Customer/Checkout';
import Orders from './pages/Customer/MyOrders';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Menu from './pages/Customer/Menu';
import { CartProvider } from './context/CartContext';
import AdminDashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/restaurant/:id/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
         <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;*/


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Customer/Home";
import RestaurantDetails from "./pages/Customer/RestaurantDetails";
import Cart from "./pages/Customer/Cart";
import Checkout from "./pages/Customer/Checkout";
import Orders from "./pages/Customer/MyOrders";
import  AuthProvider from "./context/AuthContext";
import Navbar from "./components/common/Navbar";
import Menu from "./pages/Customer/Menu";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Admin/Dashboard";
import AdminNavbar from "./components/admin/AdminNavbar";

import Restaurants from "./pages/Admin/Restaurants";
import AdminMenu from "./pages/Admin/Menu";
import AdminOrders from "./pages/Admin/Orders";



// ✅ new import

const AppLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <Routes>
        {/* Customer Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/restaurant/:id/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/restaurants" element={<Restaurants />} />
          <Route path="/admin/menu" element={<AdminMenu />} />
         <Route path="/admin/orders" element={<AdminOrders />} />
        {/* Add more admin routes here */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
