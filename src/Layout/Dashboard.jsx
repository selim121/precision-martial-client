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
import { GiTeacher } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    const { user, logOut } = useAuth();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <>
            {
                isAdmin ? <div className="drawer lg:drawer-open">
                    <input id="menu" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content px-5 w-full lg:w-3/4 absolute right-0">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="menu" className="drawer-overlay"></label>
                        <ul className="menu py-4 px-2 w-58 lg:w-1/4 h-full lg:fixed mt-24 lg:mt-0 bg-[#ec0a4a] lg:bg-[#dc034158] text-base-content">
                            <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                <h1 className="text-3xl uppercase font-bold tracking-[3px]">Admin</h1>
                            </div>
                            <li><NavLink to={'/dashboard/admin-home'} className={'text-xl'}>
                                <AiFillHome size={'20'} color="#E80040" /> Admin Home
                            </NavLink></li>
                            <li><NavLink to={'/dashboard/manage-classes'} className={'text-xl'}>
                                <SiGoogleclassroom size={'20'} color="#E80040" /> Manage Classes
                            </NavLink></li>
                            <li><NavLink to={'/dashboard/all-users'} className={'text-xl'}>
                                <FaUsers size={'20'} color="#E80040" /> All Users
                            </NavLink></li>
                            <div className="border-b-4 border-[#E80040] my-5"></div>
                            <li><NavLink to={'/'} className={'text-xl'}>
                                <AiFillHome size={'20'} color="#E80040" />Home
                            </NavLink></li>
                            <li><NavLink to={'/instructors'} className={'text-xl'}>
                                <GiTeacher size={'20'} color="#E80040" />Instructors
                            </NavLink></li>
                            <li><NavLink to={'/classes'} className={'text-xl'}>
                                <SiGoogleclassroom size={'20'} color="#E80040" />Classes
                            </NavLink></li>
                        </ul>

                    </div>
                </div>

                    :

                    isInstructor ? <div className="drawer lg:drawer-open">
                        <input id="menu" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content px-10 w-full lg:w-4/5 absolute right-0">

                            <Outlet></Outlet>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="menu" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 lg:w-60 h-full lg:fixed mt-24 lg:mt-0 bg-[#ec0a4a] lg:bg-[#dc034158] text-base-content">
                                <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                    <h1 className="text-3xl uppercase font-bold tracking-[3px]">Instructor</h1>
                                </div>
                                <li>
                                    <NavLink to={'/dashboard/instructor-home'} className={'text-xl'}>
                                        <AiFillHome size={'20'} color="#E80040" />My Home
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
                                    <div className="border-b-4 border-[#E80040] my-5"></div>
                                    <li><NavLink to={'/'} className={'text-xl'}>
                                        <AiFillHome size={'20'} color="#E80040" />Home
                                    </NavLink></li>
                                    <li><NavLink to={'/instructors'} className={'text-xl'}>
                                        <GiTeacher size={'20'} color="#E80040" />Instructors
                                    </NavLink></li>
                                    <li><NavLink to={'/classes'} className={'text-xl'}>
                                        <SiGoogleclassroom size={'20'} color="#E80040" />Classes
                                    </NavLink></li>
                                </li>
                            </ul>

                        </div>
                    </div>

                        :

                        <div className="drawer lg:drawer-open">
                            <input id="menu" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content px-5 w-full lg:w-3/4 absolute right-0">
                                <Outlet></Outlet>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="menu" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-58 lg:w-1/4 h-full lg:fixed mt-24 lg:mt-0 bg-[#ec0a4a] lg:bg-[#dc034158] text-base-content">
                                    <div className="text-center py-4 mb-4 border-b-4 border-[#E80040]">
                                        <h1 className="text-3xl uppercase font-bold tracking-[3px]">Student</h1>
                                    </div>
                                    <li><NavLink to={'/dashboard/student-home'} className={'text-xl'}>
                                        <AiFillHome size={'20'} color="#E80040" />My Home
                                    </NavLink></li>
                                    <li><NavLink to={'/dashboard/enrolled-classes'} className={'text-xl'}>
                                        <BsCartPlusFill size={'20'} color="#E80040" />Enrolled Classes
                                    </NavLink></li>
                                    <li><NavLink to={`/dashboard/ongoing-classes/${user?.email}`} className={'text-xl'}>
                                        <VscVmRunning size={'20'} color="#E80040" />Ongoing Class
                                    </NavLink></li>
                                    <li><NavLink to={'/dashboard/payment-history'} className={'text-xl'}>
                                        <FaHistory size={'20'} color="#E80040" />Payment History
                                    </NavLink></li>
                                    <div className="border-b-4 border-[#E80040] my-5"></div>
                                    <li><NavLink to={'/'} className={'text-xl'}>
                                        <AiFillHome size={'20'} color="#E80040" />Home
                                    </NavLink></li>
                                    <li><NavLink to={'/instructors'} className={'text-xl'}>
                                        <GiTeacher size={'20'} color="#E80040" />Instructors
                                    </NavLink></li>
                                    <li><NavLink to={'/classes'} className={'text-xl'}>
                                        <SiGoogleclassroom size={'20'} color="#E80040" />Classes
                                    </NavLink></li>
                                </ul>

                            </div>
                        </div>

            }


        </>
    );
};

export default Dashboard;