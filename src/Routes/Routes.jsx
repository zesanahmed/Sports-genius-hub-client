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
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";


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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mySelectedClass',
                element: <MySelectedClasses></MySelectedClasses>
            }
        ]
    }
]);

export default router;