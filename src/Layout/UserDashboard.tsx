import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import {
  FaHome,
  FaShoppingCart,
  FaUserCog,
  FaUserFriends,
} from "react-icons/fa";
import {
  AiFillAppstore,
  AiFillCarryOut,
  AiFillFileAdd,
  AiOutlineIdcard,
} from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import useUsers from "../hooks/useUser";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [cart] = useCart();
  const [users] = useUsers();
  const [role, setRole] = useState(null);

  const { user } = useAuth();
  const userEmail = user.email;

  useEffect(() => {
    const foundUser = users.find((user) => user.email === userEmail);
    if (foundUser) {
      console.log(foundUser.role);
      setRole(foundUser.role);
    }
  }, [users, userEmail]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-lime-200 lg:pt-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaUserCog /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUserFriends />
                  Manage Users
                </NavLink>
              </li>
            </>
          )}

          {role === "instructor" && (
            <>
              <li>
                <NavLink to="/dashboard/addClass">
                  <AiFillFileAdd /> Add a class
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/myClasses">
                  <AiFillAppstore />
                  My Classes
                </NavLink>
              </li>
            </>
          )}

          {role === "user" && (
            <>
              <li>
                <NavLink to="/dashboard/mySelectedClass">
                  <FaShoppingCart /> My Selected Classes{" "}
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myEnrolledClasses">
                  <AiFillCarryOut />
                  My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <AiOutlineIdcard></AiOutlineIdcard> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
