import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { AiFillCarryOut } from "react-icons/ai";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-lime-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/mySelectedClass'><FaShoppingCart /> My Selected Classes  <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </NavLink></li>
                    <li><NavLink to='/dashboard/myEnrolledClass'><AiFillCarryOut />My Enrolled Classes</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/classes'><FaHome></FaHome>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;