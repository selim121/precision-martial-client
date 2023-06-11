import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import UserProfile from "../pages/UserProfile/UserProfile";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import OngoingClasses from "../pages/Dashboard/Student/OnGoingClasses/OnGoingClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: 'sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: 'profile',
                element: <UserProfile></UserProfile>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            //admin routes
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },

            //instructor routes
            {
                path: 'instructor-home',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },

            //student routes
            {
                path: 'student-home',
                element: <PrivateRoute><StudentHome></StudentHome></PrivateRoute>
            },
            {
                path: 'enrolled-classes',
                element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'ongoing-classes/:email',
                element: <PrivateRoute><OngoingClasses></OngoingClasses></PrivateRoute>
            },
            {
                path: 'payment-history',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;