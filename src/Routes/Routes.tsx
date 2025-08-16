import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ApprovedClasses from "../pages/Classes/ApprovedClasses";
import UserDashboard from "../layout/UserDashboard";
import ErrorPage from "../pages/Error/ErrorPage";
import MySelectedClasses from "../pages/Dashboard/User/MySelectedClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import List from "../pages/Blog/List";
import Standard from "../pages/Blog/Standard";
import Masonry from "../pages/Blog/Masonry";
import CricketClub from "../pages/club/CricketClub";
import Membership from "../pages/Membership/Membership";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import AdminDashBoard from "../layout/AdminDashBoard";

const router = createBrowserRouter([
  // public routes
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog/list",
        element: <List />,
      },
      {
        path: "/blog/standard",
        element: <Standard />,
      },
      {
        path: "/blog/masonry",
        element: <Masonry />,
      },
      {
        path: "club/cricket",
        element: <CricketClub />,
      },
      {
        path: "/classes",
        element: <ApprovedClasses></ApprovedClasses>,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
    ],
  },
  // User Dashboard (Protected)
  {
    path: "dashboard",
    element: <PrivateRoute />, // এখন এখানে Outlet কাজ করবে
    children: [
      { index: true, element: <UserDashboard /> }, // default dashboard home
      { path: "mySelectedClass", element: <MySelectedClasses /> },
    ],
  },
  // Admin Dashboard (Protected)
  {
    path: "admin",
    element: <AdminRoute />,
    children: [
      { index: true, element: <AdminDashBoard /> },
      { path: "manageClasses", element: <ManageClasses /> },
      // এখানে অন্য admin routes যোগ করতে পারো
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
