import { AiOutlineMenu } from 'react-icons/ai'
import emptyProfile from '../../../assets/images/empty-profile.jpeg';
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const NavItems = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    const handleToggle = () => {
        logOut();
        setIsOpen(false);
    }
    
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className='relative me-5'>
            <div className='flex flex-row items-center gap-3'>
                <Link className='hidden md:block' to={'/'}>Home</Link>
                <Link className='hidden md:block' to={'/instructors'}>Instructors</Link>
                <Link className='hidden md:block' to={'/classes'}>Classes</Link>
                {
                    (user && user?.email && isAdmin) && <Link className='hidden md:block' to={'/dashboard/admin-home'}>Dashboard</Link>
                }
                {
                    (user && user?.email && isInstructor) && <Link className='hidden md:block' to={'/dashboard/instructor-home'}>Dashboard</Link>
                }
                {
                    (user && user?.email && !isAdmin && !isInstructor) && <Link className='hidden md:block' to={'/dashboard/student-home'}>Dashboard</Link>
                }
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className=''>
                        <img
                            className='rounded-full'
                            src={user && user.photoURL ? user.photoURL : emptyProfile}
                            alt='profile'
                            height='30'
                            width='30'
                        />
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/instructors'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Instructors
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/classes'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Classes
                            </Link>

                            {
                                isAdmin && <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/dashboard/admin-home'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                            }

                            {
                                isInstructor && <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/dashboard/instructor-home'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                            }
                            
                            {
                                (!isAdmin && !isInstructor) && <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/dashboard/student-home'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                            }

                            {
                                user?.email ? <>
                                    <Link onClick={handleToggle} to={'/sign-in'} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>Sign out</Link>
                                </>
                                    :
                                    <>
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            to='/sign-in'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign in
                                        </Link>
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            to='/sign-up'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                            }


                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default NavItems;
