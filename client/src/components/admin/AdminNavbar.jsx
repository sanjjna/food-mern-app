import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Replace with emojis/SVGs if not using Lucide

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/restaurants">Restaurants</Link>
          <Link to="/admin/menu">Menu</Link>
          <Link to="/admin/orders">Orders</Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <Link to="/admin/dashboard" onClick={() => setIsOpen(false)} className="block">Dashboard</Link>
          <Link to="/admin/restaurants" onClick={() => setIsOpen(false)} className="block">Restaurants</Link>
          <Link to="/admin/menu" onClick={() => setIsOpen(false)} className="block">Menu</Link>
          <Link to="/admin/orders" onClick={() => setIsOpen(false)} className="block">Orders</Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
