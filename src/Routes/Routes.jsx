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
            {
                path: 'admin-home',
                element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
            },
            {
                path: 'all-users',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
            {
                path: 'manage-classes',
                element: <PrivateRoute><ManageClasses></ManageClasses></PrivateRoute>
            },
            {
                path: 'instructor-home',
                element: <PrivateRoute><InstructorHome></InstructorHome></PrivateRoute>
            },
            {
                path: 'add-class',
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path: 'my-classes',
                element: <PrivateRoute><MyClasses></MyClasses></PrivateRoute>
            },
            {
                path: 'student-home',
                element: <PrivateRoute></PrivateRoute>
            },
            {
                path: 'enrolled-classes',
                element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            }
        ]
    }
  ]);

  export default router;