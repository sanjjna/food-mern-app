

/*import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-green-600">
        🍽️ FoodieApp
      </div>

      <div className="space-x-4">
        {user ? (
          <>
            
            {user.role === "customer" && (
              <>
                <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
                <NavLink to="/cart" className="text-gray-700 hover:text-green-600">Cart</NavLink>
                <NavLink to="/orders" className="text-gray-700 hover:text-green-600">My Orders</NavLink>
              </>
            )}

        
            {user.role === "admin" && (
              <NavLink to="/admin/dashboard" className="text-gray-700 hover:text-green-600">
                Admin Panel
              </NavLink>
            )}

            <span className="ml-4 text-gray-600">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-gray-700 hover:text-green-600">Login</NavLink>
            <NavLink to="/register" className="text-gray-700 hover:text-green-600">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;*/
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Menu, X } from "lucide-react"; // Optional: use icons or emojis

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">🍽️ FoodieApp</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {user.role === "customer" && (
                <>
                  <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
                  <NavLink to="/cart" className="text-gray-700 hover:text-green-600">Cart</NavLink>
                  <NavLink to="/orders" className="text-gray-700 hover:text-green-600">My Orders</NavLink>
                </>
              )}
              {user.role === "admin" && (
                <NavLink to="/admin/dashboard" className="text-gray-700 hover:text-green-600">
                  Admin Panel
                </NavLink>
              )}
              <span className="ml-4 text-gray-600">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-gray-700 hover:text-green-600">Login</NavLink>
              <NavLink to="/register" className="text-gray-700 hover:text-green-600">Register</NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden gap-3">
          {user ? (
            <>
              {user.role === "customer" && (
                <>
                  <NavLink to="/" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">Home</NavLink>
                  <NavLink to="/cart" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">Cart</NavLink>
                  <NavLink to="/orders" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">My Orders</NavLink>
                </>
              )}
              {user.role === "admin" && (
                <NavLink to="/admin/dashboard" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">
                  Admin Panel
                </NavLink>
              )}
              <span className="text-gray-600">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">Login</NavLink>
              <NavLink to="/register" onClick={handleNavLinkClick} className="text-gray-700 hover:text-green-600">Register</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
