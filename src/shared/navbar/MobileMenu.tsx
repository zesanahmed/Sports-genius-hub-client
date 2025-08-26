import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";

interface MobileMenuProps {
  isDrawerOpen: boolean;
  navLinks: {
    name: string;
    path?: string;
    onClick?: () => void;
    dropdown?: { name: string; path: string }[];
  }[];
  mobileDropdown: string;
  setMobileDropdown: (value: string) => void;
  user: any;
  handleLogout: () => void;
}

const MobileMenu = ({
  isDrawerOpen,
  navLinks,
  mobileDropdown,
  setMobileDropdown,
  user,
  handleLogout,
}: MobileMenuProps) => {
  if (!isDrawerOpen) return null;

  return (
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
                setMobileDropdown(mobileDropdown === link.name ? "" : link.name)
              }
            >
              {link.name}
            </button>
            {link.dropdown && mobileDropdown === link.name && (
              <div className="flex flex-col pl-4 text-sm space-y-1">
                {link.dropdown.map((sub, idx) => (
                  <Link key={idx} to={sub.path} className="hover:text-blue-500">
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
  );
};

export default MobileMenu;
