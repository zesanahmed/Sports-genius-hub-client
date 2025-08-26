import { Link, NavLink, useLocation } from "react-router-dom";

const NavLinks = ({ navLinks, isDropdownActive }) => {
  const location = useLocation();
  return (
    <>
      {navLinks.map((link) => (
        <div className="relative group" key={link.name}>
          {link.dropdown ? (
            <span
              className={`cursor-pointer pb-1 ${
                isDropdownActive(link.dropdown, location)
                  ? "border-b-2 border-blue-500"
                  : "hover:text-lime-300"
              }`}
            >
              {link.name}
            </span>
          ) : link.onClick ? (
            <button onClick={link.onClick} className="hover:text-blue-500 pb-1">
              {link.name}
            </button>
          ) : (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-blue-500"
                  : "hover:text-blue-500 pb-1"
              }
            >
              {link.name}
            </NavLink>
          )}

          {link.dropdown && (
            <div className="absolute hidden group-hover:flex flex-col bg-gray-900 shadow-md mt-1 z-10 p-2 space-y-1 text-lg left-0 animate-fade-in min-w-40">
              {link.dropdown.map((sub, idx) => (
                <Link key={idx} to={sub.path} className="hover:text-blue-500">
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
