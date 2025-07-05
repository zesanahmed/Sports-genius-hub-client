import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Instructor from "../pages/Instructors/Instructor";
import ApprovedClasses from "../pages/Classes/ApprovedClasses";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/Error/ErrorPage";
import MySelectedClasses from "../pages/Dashboard/User/MySelectedClasses";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyEnrolledClasses from "../pages/Dashboard/User/MyEnrolledClasses";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
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
        path: "/instructors",
        element: (
          <PrivateRoute>
            <Instructor></Instructor>
          </PrivateRoute>
        ),
      },
      {
        path: "/classes",
        element: <ApprovedClasses></ApprovedClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mySelectedClass",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "updateClass",
        element: <UpdateClass></UpdateClass>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
