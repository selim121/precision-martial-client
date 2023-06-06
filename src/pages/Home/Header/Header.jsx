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
                <h3 className="text-4xl text-white">Precision Martial</h3>
                <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Train with best legends</h1>
                <button className="text-white uppercase border px-4 py-2 rounded-md hover:bg-white hover:text-black">Join Now</button>
            </div>
        </div>
    );
};

export default Header;
