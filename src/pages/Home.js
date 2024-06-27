import SecHome from "../components/sections/SecHome"
import SecAbout from "../components/sections/SecAbout"
import SecProjects from "../components/sections/SecProjects"
import SecContact from "../components/sections/SecContact";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar first="home" second="about" third="projects" fourth="contact" fifth="socials"/>
            <SecHome/>
            <SecAbout/>
            <SecProjects/>
            <SecContact/>
        </>
    );
}

export default Home;