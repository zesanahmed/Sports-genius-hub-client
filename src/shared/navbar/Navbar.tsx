import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import NavUser from "./NavUser";
import { navLinks as navLinksData } from "./navLinksData";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
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

  const isDropdownActive = (dropdown, location) => {
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
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <NavLogo isScrolled={isScrolled} />
        <div className="hidden md:flex flex-col items-end space-y-2 w-full">
          <NavSearch isScrolled={isScrolled} />
          <div className="flex items-center justify-end space-x-12 w-full text-2xl">
            <NavLinks navLinks={navLinks} isDropdownActive={isDropdownActive} />
            <NavUser user={user} handleLogout={handleLogout} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
