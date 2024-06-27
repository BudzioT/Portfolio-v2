import Project from "../Project";
import project1Img from "../../img/Chip8.png"
import project2Img from "../../img/snake.png"
import project3Img from "../../img/string.png"
import project4Img from "../../img/box.png"

const SecProjects = () => {
    return (
        <section className="projects" id="projects">
            <p className="title">Projects</p>
            <p className="description">
                Here are my finished projects to showcase my basic skills.
                Most of them are made with C++, but not all of them.
            </p>
            <p className="description">
                They show my programming, analyzing and problem solving abilities
            </p>

            <div className="projectList">
                <Project image={project1Img} title="Chip8 Emulator" color="white" back="black"/>
                <Project image={project2Img} title="Snake" color="black" back="white"/>
                <Project image={project3Img} title="String class" color="black" back="white"/>
                <Project image={project4Img} title="Box lighting render" color="white" back="black"/>
            </div>

            <a href="/projects">
                <button className="projectButton">More projects</button>
            </a>
        </section>
    );
}

export default SecProjects;