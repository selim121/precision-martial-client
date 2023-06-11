import Logo from "./logo";
import NavItems from './NavItems';


const Navbar = () => {

    return (
        <div className='fixed w-full bg-[#dc034158] z-10'>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                <Logo />
                <NavItems />
            </div>
        </div>
    );
};

export default Navbar;