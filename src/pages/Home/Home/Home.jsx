import Header from "../Header/Header";
import WelcomePage from "../WelcomePage/WelcomePage";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
            <Header></Header>
            <WelcomePage></WelcomePage>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;