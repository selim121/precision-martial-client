import useAuth from "../hooks/useAuth";
import Logo from "../pages/Shared/Navbar/logo";
import emptyProfile from '../assets/images/empty-profile.jpeg';
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import { useState } from "react";

const Dashboard = () => {

    const { user } = useAuth();

    const [selectedComponent, setSelectedComponent] = useState('home');

    const handleComponentSelection = (component) => {
        setSelectedComponent(component);
    };


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
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="drawer lg:drawer-open pt-24">
                <input id="menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-5 mt-5 w-full lg:w-4/5 absolute right-0">
                    {
                        selectedComponent === 'home' && <AdminHome></AdminHome>
                    }
                    {
                        selectedComponent === 'allUsers' && <AllUsers></AllUsers>
                    }


                </div>
                <div className="drawer-side">
                    <label htmlFor="menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 lg:w-1/5 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                        <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                            <h1 className="text-3xl uppercase font-bold tracking-[3px]">Admin</h1>
                        </div>
                        <Link to={'/dashboard/admin-home'}>
                            <div className={`flex flex-row items-center gap-2 mt-5 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'home' ? 'bg-base-200 opacity-70' : ''}`}
                                onClick={() => handleComponentSelection('home')}>
                                <AiFillHome size={'20'} color="#E80040" />
                                <p className="text-xl hover:text-[#E80040]">Home</p>
                            </div>
                        </Link>
                        <Link to={'/dashboard/all-users'}>
                            <div className={`flex flex-row items-center gap-2 mt-4 hover:bg-base-200 hover:opacity-70 px-4 py-1 rounded-md ${selectedComponent === 'allUsers' ? 'bg-base-200 opacity-70' : ''}`}
                                onClick={() => handleComponentSelection('allUsers')}>
                                <FaUsers size={'20'} color="#E80040" />
                                <p className="text-xl hover:text-[#E80040]">All Users</p>
                            </div>
                        </Link>
                    </ul>

                </div>
            </div>


        </>
    );
};

export default Dashboard;