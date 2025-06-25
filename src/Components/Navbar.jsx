import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Compass, ShoppingCart, Menu, X, User } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to home page
  };

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine Navbar background based on route
  const isHeroPage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isHeroPage && scrollY < 50
          ? "bg-transparent text-white"
          : "bg-white text-gray-900 shadow-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Compass className="h-8 w-8 text-blue-600" />
              <NavLink to="/" className="ml-2 text-xl font-bold">
                TravelExplorer
              </NavLink>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    : "border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/destinations"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    : "border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                }
              >
                Destinations
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    : "border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    : "border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 rounded-full hover:text-blue-700"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile/Login/Sign Up */}
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-medium hover:text-gray-700"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
            >
              Destinations
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;