import header from '../../../assets/images/header/header.png';
import header1 from '../../../assets/images/header/header1.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-image">
                <img src={header} alt="Header Image" className="header-img" />
            </div>
            <div className="header-image">
                <img src={header1} alt="Header Image" className="header-img" />
            </div>
            <div className="text-overlay">
                <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Train with best legends</h1>
                <button className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</button>
            </div>
        </div>
    );
};

export default Header;
