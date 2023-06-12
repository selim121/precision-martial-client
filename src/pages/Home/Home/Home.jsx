/* eslint-disable no-unused-vars */
import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Membership from "../Membership/Membership";
import Review from "../Review/Review";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="pt-24">
            <Helmet>
                <title>
                    Precision Martial - Home
                </title>
            </Helmet>
            {/* <Header></Header> */}
            <Slider></Slider>
            <WelcomePage></WelcomePage>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Membership></Membership>
            <Review></Review>
        </div>
    );
};

export default Home;