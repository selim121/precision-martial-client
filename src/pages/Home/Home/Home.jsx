/* eslint-disable no-unused-vars */
import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Membership from "../../Membership/Membership";
import Review from "../../Review/Review";

const Home = () => {
    return (
        <div className="pt-24">
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