import Navbar from "../components/Navbar";
import "../sass/projectView.scss"
import project1Img from "../img/Chip8.png";
import Project from "../components/Project";
import project2Img from "../img/snake.png";
import project3Img from "../img/string.png";
import project4Img from "../img/box.png";
import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const ProjectView = () => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const handleOpen = (title) => {
        setOpen(true);
        setModalTitle(title);
    };

    return (
        <>
            <Navbar first="home" second="C++" third="python" fourth="rust" fifth="socials" char='/'/>
            <div className="projectView">
                <h1 className="title">Project list</h1>
                <hr className="underline"/>
                <p className="description">Here are my most important projects</p>
                <p className="description descEnd">
                    They are divided by programming languages for easier navigation
                </p>

                <text className="language" id="C++">C++</text>
                <hr className="smallUnderline"/>
                <p className="description">
                    These are my main projects, ranging from games to applications and even more
                </p>

                <div className="projectList">
                    <Project image={project1Img} title="Chip-8 Emulator" color="white" back="black"
                             onClick={() => handleOpen("Chip-8 Emulator")}/>

                    <Project image={project2Img} title="Snake" color="black" back="white"
                             onClick={() => handleOpen("Snake")}/>

                    <Project image={project3Img} title="String class" color="black" back="white"
                             onClick={() => handleOpen("String class")}/>

                    <Project image={project4Img} title="Box lighting render" color="white" back="black"
                             onClick={() => handleOpen("Box lighting render")}/>
                </div>
            </div>

            <ProjectModal open={open} onClose={() => setOpen(false)}
            title={modalTitle}/>
        </>
    );
}

export default ProjectView;