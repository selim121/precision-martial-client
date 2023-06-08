import useAuth from "../hooks/useAuth";
import Logo from "../pages/Shared/Navbar/logo";
import emptyProfile from '../assets/images/empty-profile.jpeg';
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import useInstructor from "../hooks/useInstructor";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";

const Dashboard = () => {

    const { user, logOut } = useAuth();

    const [selectedComponent, setSelectedComponent] = useState('home');

    const handleComponentSelection = (component) => {
        setSelectedComponent(component);
    };

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()

    return (
        <>
            <div className='fixed w-full bg-white z-10 border-b-2 shadow-md'>
                <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                    <div className="">
                        <Logo></Logo>
                    </div>
                    <div className="mx-auto">
                        <label htmlFor="menu" className="drawer-button lg:hidden flex items-center">

                            <AiOutlineMenu size={'30'} className="cursor-pointer" color="E80040" />

                        </label>
                    </div>
                    <div className="ms-auto me-5">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="avatar cursor-pointer">
                                <div className="w-8 rounded-full ring ring-[#E80040] ring-offset-base-100 ring-offset-2">
                                    <img src={user && user.photoURL ? user.photoURL : emptyProfile} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <button onClick={logOut}>Sign Out</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {
                isAdmin ? <div className="drawer lg:drawer-open pt-24">
                    <input id="menu" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content px-5 mt-5 w-full lg:w-4/5 absolute right-0">
                        {
                            selectedComponent === 'home' && <AdminHome></AdminHome>
                        }
                        {
                            selectedComponent === 'manageClasses' && <ManageClasses></ManageClasses>
                        }
                        {
                            selectedComponent === 'allUsers' && <AllUsers></AllUsers>
                        }


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="menu" className="drawer-overlay"></label>
                        <ul className="menu py-4 px-2 w-52 lg:w-1/5 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                            <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                <h1 className="text-3xl uppercase font-bold tracking-[3px]">Admin</h1>
                            </div>
                            <Link to={'/dashboard/admin-home'}>
                                <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-2 py-1 rounded-md ${selectedComponent === 'home' ? 'bg-base-200 opacity-70' : ''}`}
                                    onClick={() => handleComponentSelection('home')}>
                                    <AiFillHome size={'20'} color="#E80040" />
                                    <p className="text-xl hover:text-[#E80040]">Home</p>
                                </div>
                            </Link>
                            <Link to={'/dashboard/manage-classes'}>
                                <div className={`flex flex-row items-center gap-2 mt-4 hover:bg-base-200 hover:opacity-70 px-2 py-1 rounded-md ${selectedComponent === 'manageClasses' ? 'bg-base-200 opacity-70' : ''}`}
                                    onClick={() => handleComponentSelection('manageClasses')}>
                                    <SiGoogleclassroom size={'20'} color="#E80040" />
                                    <p className="text-xl hover:text-[#E80040]">Manage Classes</p>
                                </div>
                            </Link>
                            <Link to={'/dashboard/all-users'}>
                                <div className={`flex flex-row items-center gap-2 mt-4 hover:bg-base-200 hover:opacity-70 px-2 py-1 rounded-md ${selectedComponent === 'allUsers' ? 'bg-base-200 opacity-70' : ''}`}
                                    onClick={() => handleComponentSelection('allUsers')}>
                                    <FaUsers size={'20'} color="#E80040" />
                                    <p className="text-xl hover:text-[#E80040]">All Users</p>
                                </div>
                            </Link>
                            
                        </ul>

                    </div>
                </div>

                    :

                    isInstructor ? <div className="drawer lg:drawer-open pt-24">
                        <input id="menu" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content px-10 mt-5 w-full lg:w-4/5 absolute right-0">
                            {
                                selectedComponent === 'home' && <InstructorHome></InstructorHome>
                            }
                            {
                                selectedComponent === 'addClass' && <AddClass></AddClass>
                            }
                            {
                                selectedComponent === 'myClasses' && <MyClasses></MyClasses>
                            }


                        </div>
                        <div className="drawer-side">
                            <label htmlFor="menu" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 lg:w-60 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                                <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                    <h1 className="text-3xl uppercase font-bold tracking-[3px]">Instructor</h1>
                                </div>
                                <Link to={'/dashboard/instructor-home'}>
                                    <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'home' ? 'bg-base-200 opacity-70' : ''}`}
                                        onClick={() => handleComponentSelection('home')}>
                                        <AiFillHome size={'20'} color="#E80040" />
                                        <p className="text-xl hover:text-[#E80040]">Home</p>
                                    </div>
                                </Link>
                                <Link to={'/dashboard/add-class'}>
                                    <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'addClass' ? 'bg-base-200 opacity-70' : ''}`}
                                        onClick={() => handleComponentSelection('addClass')}>
                                        <IoIosAddCircle size={'20'} color="#E80040" />
                                        <p className="text-xl hover:text-[#E80040]">Add Class</p>
                                    </div>
                                </Link>
                                <Link to={'/dashboard/my-classes'}>
                                    <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'myClasses' ? 'bg-base-200 opacity-70' : ''}`}
                                        onClick={() => handleComponentSelection('myClasses')}>
                                        <SiGoogleclassroom size={'20'} color="#E80040" />
                                        <p className="text-xl hover:text-[#E80040]">My Classes</p>
                                    </div>
                                </Link>
                            </ul>

                        </div>
                    </div>

                        :

                        <div className="drawer lg:drawer-open pt-24">
                            <input id="menu" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content px-5 mt-5 w-full lg:w-4/5 absolute right-0">
                                {
                                    selectedComponent === 'home' && <StudentHome></StudentHome>
                                }


                            </div>
                            <div className="drawer-side">
                                <label htmlFor="menu" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-52 lg:w-1/5 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                                    <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                        <h1 className="text-3xl uppercase font-bold tracking-[3px]">Student</h1>
                                    </div>
                                    <Link to={'/dashboard/student-home'}>
                                        <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'home' ? 'bg-base-200 opacity-70' : ''}`}
                                            onClick={() => handleComponentSelection('home')}>
                                            <AiFillHome size={'20'} color="#E80040" />
                                            <p className="text-xl hover:text-[#E80040]">Home</p>
                                        </div>
                                    </Link>
                                </ul>

                            </div>
                        </div>

            }


        </>
    );
};

export default Dashboard;