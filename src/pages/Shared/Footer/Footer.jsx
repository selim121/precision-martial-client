/* eslint-disable react/jsx-no-target-blank */
import { IoMdCall } from 'react-icons/io';
import logo from '../../../assets/images/logo/logo.png';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GiWorld } from 'react-icons/gi';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();


    return (
        <div className="">
            <footer className="footer p-10 bg-[#dc034158] text-base-content">
                <div className='-mt-8'>
                    <img className='-ms-7' src={logo} />
                    <p>10/7, Shekhertek, Adabor, Mohammadpur,<br />Dhaka, Bangladesh</p>
                    <div className="flex items-center gap-2">
                        <IoMdCall color='#E80040' />
                        +880-1773-407-976
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineMail color='#E80040' />
                        selimhossain.sh1@gmail.com
                    </div>
                </div>
                <div>
                    <span className="text-[#E80040] font-semibold uppercase text-lg border-b">Services</span>
                    <a href='#membership' className="link link-hover hover:text-[#E80040]">Consultation</a>
                    <a href='#membership' className="link link-hover hover:text-[#E80040]">Assessment</a>
                    <a href='#membership' className="link link-hover hover:text-[#E80040]">24/7 Support</a>
                    <a href='#membership' className="link link-hover hover:text-[#E80040]">Nutritional Plan</a>
                </div>
                <div>
                    <span className="text-[#E80040] font-semibold uppercase text-lg border-b">Useful Links</span>
                    <a href='#about' className="link link-hover hover:text-[#E80040]">About Us</a>
                    <a href='#popularInstructors' className="link link-hover hover:text-[#E80040]">Popular Instructors</a>
                    <a href='#popularClasses' className="link link-hover hover:text-[#E80040]">Popular Classes</a>
                    <a href='#membership' className="link link-hover hover:text-[#E80040]">Membership</a>
                </div>
                <div>
                    <span className="text-[#E80040] font-semibold uppercase text-lg border-b">Opening Hours</span>
                    <div className='flex gap-5'>
                        <p className="text-start">Mon - Tues:</p>
                        <p className="text-end">6.00 am - 10.00 pm</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className="text-start">Wed - Thurs:</p>
                        <p className="text-end">8.00 am - 6.00 pm</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className="text-start">Fri & Sun:</p>
                        <p className="text-end">Closed</p>
                    </div>
                </div>
            </footer>
            <div className="border-t"></div>
            <footer className="footer items-center p-4 bg-[#dc034158]">
                <div className="items-center grid-flow-col">
                    <p className="font-light text-sm">Copyright <span>&copy; {currentYear} Selim. All Right Reserved</span></p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className='hover:text-[#E80040]' href="https://github.com/selim121/" target='_blank'>
                        <AiFillGithub size={'40px'} />
                    </a>
                    <a className='hover:text-[#E80040]' href="https://www.linkedin.com/in/selimhossain-sh1/" target='_blank'>
                        <AiFillLinkedin size={'40px'} />
                    </a>
                    <a className='hover:text-[#E80040]' href="https://selim.netlify.app/" target='_blank'>
                        <GiWorld size={'40px'} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;