import Project from "../Project";
import project1Img from "../../img/Chip8.png"
import project2Img from "../../img/snake.png"
import project3Img from "../../img/string.png"
import project4Img from "../../img/box.png"
import React, {useState} from "react";
import ProjectModal from "../ProjectModal";

const SecProjects = () => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalText, setModalText] = useState("");
    const [modalImage, setModalImage] = useState("");
    const [modalLink, setModalLink] = useState("");
    const [modalTechnologies, setModalTechnologies] = useState([]);

    const handleOpen = (title, text, image, link, technologies) => {
        setOpen(true);
        setModalTitle(title);
        setModalText(text);
        setModalImage(image);
        setModalLink(link);
        setModalTechnologies(technologies)
    };

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
                <Project image={project1Img} title="Chip-8 Emulator" color="white" back="black"
                         onClick={() =>
                             handleOpen("Chip-8 Emulator",
                                 "A Chip-8 emulator made in C++. It always you to access and play ROMS " +
                                 "made for this system. This emulator was written in C++, with CMake, using " +
                                 "SDL2. For easy compiling, use Linux",
                                 project1Img,
                                 "",
                                 ["C++", "CMake", "SDL2"])}/>

                <Project image={project2Img} title="Snake" color="black" back="green"
                         onClick={() =>
                             handleOpen("Snake",
                                 "A Snake made with C++ and SDL. It has proper menu, game over screen" +
                                 "and point counting system. Try to get the highest score!",
                                 project2Img,
                                 "https://github.com/BudzioT/Snake_game",
                                 ["C++", "CMake", "SDL2", "SDL2_Mixer", "SDL2_TTF", "SDL2_Image"])}/>

                <Project image={project3Img} title="String class" color="black" back="white"
                         onClick={() =>
                             handleOpen("String class",
                                 "My own implementation of std::string(std::basic_string) from STL." +
                                 "It has most of the methods that the original one offers including" +
                                 "using iterators, searching and more.",
                                 project3Img,
                                 "https://github.com/BudzioT/Custom_String",
                                 ["C++"])}/>

                <Project image={project4Img} title="Box lighting render" color="white" back="black"
                         onClick={() =>
                             handleOpen("Box lighting render",
                                 "This is a light simulation. The program renders one box, with metal frames, " +
                                 "which are affected by the lighting more than the wooden part of the box." +
                                 "The camera mode is freely flying, you can use it with WASD, shift and mouse",
                                 project4Img,
                                 "https://github.com/BudzioT/Map_lighting",
                                 ["C++", "OpenGL", "C", "CMake", "GLM", "stb"])}/>
            </div>

            <a href="/projects">
                <button className="projectButton">More projects</button>
            </a>

            <ProjectModal open={open} onClose={() => setOpen(false)}
                          title={modalTitle} text={modalText} image={modalImage}
                          link={modalLink} technologies={modalTechnologies}/>
        </section>
    );
}

export default SecProjects;