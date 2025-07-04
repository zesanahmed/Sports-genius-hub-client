import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  const handleLogout = () => {
    logOut();
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        { name: "Cricket Club", path: "/club" },
        { name: "Coaching", path: "/coaching" },
        { name: "Cricket Equipment Store", path: "/store" },
      ],
    },
    {
      name: "Pages",
      path: "/pages",
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
      path: "/events",
      dropdown: [
        { name: "Events List", path: "/events/list" },
        { name: "Events Calendar", path: "/events/calendar" },
        { name: "Single Event", path: "/events/single" },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
      dropdown: [
        { name: "Standard", path: "/blog/standard" },
        { name: "List", path: "/blog/list" },
        { name: "Masonry", path: "/blog/masonry" },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      dropdown: [
        { name: "Product List", path: "/shop/products" },
        { name: "Product Single", path: "/shop/product" },
        { name: "Cart", path: "/cart" },
        { name: "Checkout", path: "/checkout" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md bg-gray-900 text-white sticky top-0 z-50 border-b">
      <div className="flex justify-between items-center px-6 py-2 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl">🏏</div>
            <h1 className="text-sm md:text-4xl font-bold">Sports</h1>
            <div className="flex items-center space-x-1">
              <span className="text-sm md:text-2xl font-bold text-gray-500">
                Genius
              </span>
              <h1 className="text-sm md:text-xl font-bold bg-lime-500 text-white px-1">
                Hub
              </h1>
            </div>
          </div>
        </div>

        <div className="md:hidden">
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
                className="w-9 h-9 rounded-full border-2 border-primary"
              />
            )}
          </div>

          <div className="flex items-center justify-end space-x-12 w-full text-2xl">
            {navLinks.map((link) => (
              <div className="relative group" key={link.name}>
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
                className="btn btn-sm btn-error flex items-center space-x-1"
              >
                <FiLogOut /> <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-success flex items-center space-x-1"
              >
                <FiLogIn /> <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg px-4 py-2 space-y-3 animate-slide-down">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-sm w-40 text-black text-lg"
            />
            <button className="btn btn-sm btn-primary">
              <FaSearch />
            </button>
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
                  className="btn btn-sm btn-error flex items-center space-x-1"
                >
                  <FiLogOut /> <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-sm btn-success flex items-center space-x-1"
                >
                  <FiLogIn /> <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
