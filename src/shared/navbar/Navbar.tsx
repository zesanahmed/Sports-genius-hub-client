import { useState, useEffect } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";

import NavLogo from "./NavLogo";
import NavSearchBar from "./NavSearchBar";
import NavLinks from "./NavLinks";
import NavAuthButtons from "./NavAuthButtons";
import NavUserAvatar from "./NavUserAvatar";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../context/AuthContext";
import { navLinks as navLinksData } from "./navLinksData";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => logout();

  const handleDashboardClick = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    if (user.role === "admin") navigate("/dashboard/admin");
    else navigate("/dashboard/user");
  };

  const navLinks = navLinksData(handleDashboardClick);

  const isDropdownActive = (dropdown) => {
    return dropdown?.some((item) => location.pathname.startsWith(item.path));
  };

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY >= window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const textBaseRoutes = ["/contact"];

  const isTextBase = textBaseRoutes.includes(location.pathname);
  return (
    <motion.nav
      className={`w-full z-50 transition-all duration-500 ${
        isTextBase
          ? "text-base-content"
          : isScrolled
          ? "sticky top-0 bg-base-content text-white shadow-md"
          : "absolute top-0 left-0 text-white"
      }`}
    >
      <div className="flex flex-row md:flex-row justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto transition-all duration-300">
        <NavLogo isScrolled={isScrolled} />

        {/* Mobile (Top Right Buttons) */}
        <div className="md:hidden flex justify-end w-full mt-2 md:mt-0">
          <div className="flex items-center space-x-2">
            <button className="btn btn-sm btn-outline mr-5">
              <FaShoppingCart />
            </button>
            <NavUserAvatar user={user} />
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="btn btn-sm btn-ghost"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-end space-y-2 w-full">
          {!isScrolled && (
            <div className="flex items-center space-x-12">
              <NavSearchBar />

              <NavAuthButtons user={user} handleLogout={handleLogout} />
              <NavUserAvatar user={user} />
            </div>
          )}
          <div className="flex items-center justify-end space-x-12 w-full text-2xl">
            <NavLinks navLinks={navLinks} isDropdownActive={isDropdownActive} />
            <button className="btn btn-sm btn-outline h-9 w-9">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <MobileMenu
          navLinks={navLinks}
          mobileDropdown={mobileDropdown}
          setMobileDropdown={setMobileDropdown}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
