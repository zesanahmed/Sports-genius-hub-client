import { Link } from "react-router-dom";


const Navbar = () => {

    const NavRoutes = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Dashboard</Link></li>
    </>

    return (
        <div className="navbar max-w-screen-xl bg-opacity-30 bg-lime-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavRoutes}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="">
                        <span className="md:text-4xl font-bold text-lime-500">Sports</span>
                        <span className="md:text-4xl font-bold"> Genius</span> <span className="text-base pt-5">Hub</span></div>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavRoutes}
                    </ul>
                </div>
                <Link to='/login'> <a className="btn btn-sm bg-lime-300 md:ms-10">Login</a></Link>
            </div>
        </div >
    );
};

export default Navbar;