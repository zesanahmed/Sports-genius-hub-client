import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleDashboardClick = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    if (user.role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/user");
    }
  };

  const navLinks = [
    {
      name: "Home",
      dropdown: [
        { name: "Cricket Club", path: "club/cricket" },
        { name: "Coaching", path: "/coaching" },
        { name: "Cricket Equipment Store", path: "/store" },
      ],
    },
    {
      name: "Pages",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Our Programs", path: "/programs" },
        { name: "Our Team", path: "/team" },
        { name: "FAQs", path: "/faqs" },
        { name: "Membership", path: "/membership" },
        { name: "Online Booking", path: "/booking" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Events List", path: "/events/list" },
        { name: "Events Calendar", path: "/events/calendar" },
        { name: "Single Event", path: "/events/single" },
      ],
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Standard", path: "/blog/standard" },
        { name: "List", path: "/blog/list" },
        { name: "Masonry", path: "/blog/masonry" },
      ],
    },
    {
      name: "Shop",
      dropdown: [
        { name: "Product List", path: "/shop/products" },
        { name: "Product Single", path: "/shop/product" },
        { name: "Cart", path: "/cart" },
        { name: "Checkout", path: "/checkout" },
      ],
    },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", onClick: handleDashboardClick },
  ];

  const isDropdownActive = (dropdown) => {
    return dropdown?.some((item) => location.pathname.startsWith(item.path));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "sticky top-0 bg-base-content text-white shadow-md"
          : "absolute top-0 left-0 text-white"
      }`}
    >
      <div className="flex flex-row md:flex-row justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto transition-all duration-300">
        <motion.div
          className="flex items-center space-x-2"
          initial={false}
          animate={{ gap: isScrolled ? 8 : 16 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            {
              <Link to="/">
                <div
                  className={`text-2xl ${
                    isScrolled ? "md:text-4xl" : "md:text-5xl"
                  }`}
                >
                  🏏
                </div>
              </Link>
            }
            <AnimatePresence>
              {!isScrolled && (
                <Link to="/" className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-sm md:text-4xl font-bold">Sports</h1>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm md:text-2xl font-bold text-gray-500">
                        Genius
                      </span>
                      <h1 className="text-sm md:text-xl font-bold primary-bg text-white px-1">
                        Hub
                      </h1>
                    </div>
                  </motion.div>
                </Link>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="md:hidden flex justify-end w-full mt-2 md:mt-0">
          <div className="flex items-center space-x-2">
            <button className="btn btn-sm btn-outline mr-5">
              <FaShoppingCart className="" />
            </button>
            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="profile"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
            )}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="btn btn-sm btn-ghost"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end space-y-2 w-full">
          {!isScrolled && (
            <div className="flex items-center space-x-12">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered input-sm w-40 lg:w-96 h-9 text-lg text-black"
                />
                <button className="btn btn-outline text-lg h-9 ml-1">
                  SEARCH
                </button>
              </div>
              <button className="btn btn-sm btn-outline h-9 w-9">
                <FaShoppingCart />
              </button>

              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
              )}
            </div>
          )}

          <div className="flex items-center justify-end space-x-12 w-full text-2xl">
            {navLinks.map((link) => (
              <div className="relative group" key={link.name}>
                {link.dropdown ? (
                  <span
                    className={`cursor-pointer pb-1 ${
                      isDropdownActive(link.dropdown)
                        ? "border-b-2 border-blue-500"
                        : "hover:text-lime-300"
                    }`}
                  >
                    {link.name}
                  </span>
                ) : link.onClick ? ( // ⬅ Dashboard এর জন্য
                  <button
                    onClick={link.onClick}
                    className="hover:text-blue-500 pb-1"
                  >
                    {link.name}
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "pb-1 border-b-2 border-blue-500"
                        : "hover:text-blue-500 pb-1 "
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {link.dropdown && (
                  <div className="absolute hidden group-hover:flex flex-col bg-gray-900 shadow-md mt-1 z-10 p-2 space-y-1 text-lg left-0 animate-fade-in min-w-40">
                    {link.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        className="hover:text-blue-500"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline flex items-center space-x-1"
              >
                <FiLogOut /> <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-outline flex items-center space-x-1"
              >
                <FiLogIn /> <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg px-4 py-2 space-y-3 animate-slide-down">
          <div className="flex items-center space-x-1">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-sm w-48 text-black"
            />
            <button className="btn btn-outline text-sm h-8 ml-1">SEARCH</button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  className="text-left font-semibold w-full hover:text-blue-500"
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === link.name ? "" : link.name
                    )
                  }
                >
                  {link.name}
                </button>
                {link.dropdown && mobileDropdown === link.name && (
                  <div className="flex flex-col pl-4 text-sm space-y-1">
                    {link.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        className="hover:text-blue-500"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center pt-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-xs btn-outline flex items-center space-x-1"
                >
                  <FiLogOut /> <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-xs btn-outline flex items-center space-x-1"
                >
                  <FiLogIn /> <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
