import Project from "../Project";
import chip8Img from "../../img/Chip8.png"

const SecProjects = () => {
    return (
        <section className="projects">
            <p className="title">Projects</p>
            <p className="description">
                Here are my finished projects to showcase my basic skills.
                Most of them are made with C++, but not all of them.
            </p>
            <p className="description">
                They show my programming, analyzing and problem solving abilities
            </p>

            <div id="projectList">
                <Project image={chip8Img} title="Chip-8 Emulator"/>
            </div>
        </section>
    );
}

export default SecProjects;