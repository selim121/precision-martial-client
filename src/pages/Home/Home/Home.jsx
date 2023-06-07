import Classes from "../Classes/Classes";
import Header from "../Header/Header";
import Instructors from "../Instructors/Instructors";
import WelcomePage from "../WelcomePage/WelcomePage";

const Home = () => {
    return (
        <>
            <Header></Header>
            <WelcomePage></WelcomePage>
            <Classes></Classes>
            <Instructors></Instructors>
        </>
    );
};

export default Home;