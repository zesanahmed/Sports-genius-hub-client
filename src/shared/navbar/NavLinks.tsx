import { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const NavLinks = ({ navLinks, isDropdownActive }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // <-- 200ms delay before hiding
  };

  return (
    <>
      {navLinks.map((link) => (
        <div
          className="relative"
          key={link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
        >
          {link.dropdown ? (
            <span
              className={`cursor-pointer pb-1 ${
                isDropdownActive(link.dropdown)
                  ? "border-b-2"
                  : "hover:text-[rgb(175,214,57)]"
              }`}
            >
              {link.name}
            </span>
          ) : link.onClick ? (
            <button
              onClick={link.onClick}
              className="hover:text-[rgb(175,214,57)] pb-1"
            >
              {link.name}
            </button>
          ) : (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[rgb(175,214,57)]"
                  : "hover:text-[rgb(175,214,57)] pb-1"
              }
            >
              {link.name}
            </NavLink>
          )}

          {link.dropdown && openDropdown === link.name && (
            <div className="absolute flex flex-col bg-base-content shadow-md mt-4 z-10 p-6 space-y-3 font-sans text-white text-base left-0 animate-fade-in min-w-60">
              {link.dropdown.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.path}
                  className="hover:text-[rgb(175,214,57)]"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
