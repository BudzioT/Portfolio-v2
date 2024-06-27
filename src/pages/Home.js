import SecHome from "../components/sections/SecHome"
import SecAbout from "../components/sections/SecAbout"
import SecProjects from "../components/sections/SecProjects"
import SecContact from "../components/sections/SecContact";

const Home = () => {
    return (
        <>
            <SecHome/>
            <SecAbout/>
            <SecProjects/>
            <SecContact/>
        </>
    );
}

export default Home;