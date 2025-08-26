import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const NavUser = ({ user, handleLogout }) => {
  return (
    <>
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
    </>
  );
};

export default NavUser;
