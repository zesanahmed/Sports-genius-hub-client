import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MySelectedClasses from "../pages/Dashboard/UserDashboard/MySelectedClasses";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import MyEnrolledClasses from "../pages/Dashboard/UserDashboard/MyEnrolledClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/instructors',
                element: <PrivateRoute><Instructor></Instructor></PrivateRoute>
            },
            {
                path: '/classes',
                element: <ApprovedClasses></ApprovedClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mySelectedClass',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;