import Navbar from "../components/Navbar";
import "../sass/projectView.scss"

const ProjectView = () => {
    return (
        <div className="projectView">
            <Navbar first="home" second="C++" third="python" fourth="rust" fifth="socials"/>

            <h1 className="title">Project list</h1>
            <hr className="underline"/>
        </div>
    );
}

export default ProjectView;