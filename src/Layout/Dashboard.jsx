/* eslint-disable no-unused-vars */
import useAuth from "../hooks/useAuth";
import Logo from "../pages/Shared/Navbar/logo";
import emptyProfile from '../assets/images/empty-profile.jpeg';
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { VscVmRunning } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";
import { BsCartPlusFill } from "react-icons/bs";
import { FaUsers, FaHistory } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    const { user, logOut } = useAuth();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                            {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link onClick={logOut} to={'/sign-in'}>Sign Out</Link>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>

            {
                isAdmin ? <div className="drawer lg:drawer-open pt-24">
                    <input id="menu" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content px-5 mt-20 w-full lg:w-4/5 absolute right-0">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="menu" className="drawer-overlay"></label>
                        <ul className="menu py-4 px-2 w-58 lg:w-1/5 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                            <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                <h1 className="text-3xl uppercase font-bold tracking-[3px]">Admin</h1>
                            </div>
                            <li><NavLink to={'/dashboard/admin-home'} className={'text-xl'}>
                            <AiFillHome size={'20'} color="#E80040" /> Home
                            </NavLink></li>
                            <li><NavLink to={'/dashboard/manage-classes'} className={'text-xl'}>
                            <SiGoogleclassroom size={'20'} color="#E80040" /> Manage Classes
                            </NavLink></li>
                            <li><NavLink to={'/dashboard/all-users'} className={'text-xl'}>
                            <FaUsers size={'20'} color="#E80040" /> All Users
                            </NavLink></li>
                            
                        </ul>

                    </div>
                </div>

                    :

                    isInstructor ? <div className="drawer lg:drawer-open pt-24">
                        <input id="menu" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content px-10 mt-20 w-full lg:w-4/5 absolute right-0">
                            
                            <Outlet></Outlet>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="menu" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 lg:w-60 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                                <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                    <h1 className="text-3xl uppercase font-bold tracking-[3px]">Instructor</h1>
                                </div>
                                <li>
                                <NavLink to={'/dashboard/instructor-home'} className={'text-xl'}>
                                <AiFillHome size={'20'} color="#E80040" /> Home
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to={'/dashboard/add-class'} className={'text-xl'}>
                                <IoIosAddCircle size={'20'} color="#E80040" /> Add Class
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to={'/dashboard/my-classes'} className={'text-xl'}>
                                <SiGoogleclassroom size={'20'} color="#E80040" /> My Class
                                </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>

                        :

                        <div className="drawer lg:drawer-open pt-24">
                            <input id="menu" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content px-5 mt-20 w-full lg:w-4/5 absolute right-0">
                                <Outlet></Outlet>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="menu" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-52 lg:w-1/5 h-full lg:fixed mt-24 lg:mt-0 bg-[#dc034158] text-base-content">
                                    <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                        <h1 className="text-3xl uppercase font-bold tracking-[3px]">Student</h1>
                                    </div>
                                    <li><NavLink to={'/dashboard/student-home'} className={'text-xl'}>
                                    <AiFillHome size={'20'} color="#E80040" /> Home
                                    </NavLink></li>
                                    <li><NavLink to={'/dashboard/enrolled-classes'} className={'text-xl'}>
                                    <BsCartPlusFill size={'20'} color="#E80040" /> Enrolled
                                    </NavLink></li>
                                    <li><NavLink to={`/dashboard/ongoing-classes/${user?.email}`} className={'text-xl'}>
                                    <VscVmRunning size={'20'} color="#E80040" /> Ongoing
                                    </NavLink></li>
                                    <li><NavLink to={'/dashboard/payment-history'} className={'text-xl'}>
                                    <FaHistory size={'20'} color="#E80040" /> History
                                    </NavLink></li>
                                </ul>

                            </div>
                        </div>

            }


        </>
    );
};

export default Dashboard;