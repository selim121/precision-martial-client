import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../../assets/images/header/header.png';
import slide2 from '../../../assets/images/header/header1.png';
import slide3 from '../../../assets/images/header/header2.png';
import slide4 from '../../../assets/images/header/header3.png';
import slide5 from '../../../assets/images/header/header4.png';
import slide6 from '../../../assets/images/header/header5.png';
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            renderThumbs={() => null}
        >
            <div className="slide">
                <div className="slide-content" />
                <img src={slide2} alt="Photo 1" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Train with best legends</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide-content" />
                <img src={slide3} alt="Photo 2" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Balance body & mind</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide-content" />
                <img src={slide5} alt="Photo 2" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Discover the power</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide-content" />
                <img src={slide4} alt="Photo 2" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Control body and mind</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide-content" />
                <img src={slide6} alt="Photo 2" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Beauty of movement</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide-content" />
                <img src={slide1} alt="Photo 2" className="" />
                <div className="text-overlay lg:mt-36">
                    <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                    <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Artistry expression</h1>
                    <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;