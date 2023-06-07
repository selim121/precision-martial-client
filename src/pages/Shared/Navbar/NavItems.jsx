import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
const Search = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    return (
        <div className='relative me-5'>
            <div className='flex flex-row items-center gap-3'>
                <Link className='hidden md:block' to={'/'}>Home</Link>
                <Link className='hidden md:block' to={'/instructors'}>Instructors</Link>
                <Link className='hidden md:block' to={'/classes'}>Classes</Link>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        <Link
                            to='/instructors'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Instructors
                        </Link>
                        <Link
                            to='/classes'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Classes
                        </Link>
                        <div
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                            Sign out
                        </div>
                        <Link
                            to='/login'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Sign in
                        </Link>
                        <Link
                            to='/signup'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
