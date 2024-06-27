import {useState} from "react";
import Modal from '@mui/material/Modal';
import "../sass/projectModal.scss"

const ProjectModal = ({open, onClose, image, title, text, link, technologies}) => {
    const firstColumnTechnologies = technologies.slice(0, 3);
    const secondColumnTechnologies = technologies.slice(3);

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modalBackground">
                <div className="arrowTitle">
                    <i className="backArrow" onClick={onClose}></i>
                    <text className="modalTitle">{title}</text>
                </div>

                <div className="projectContent">
                    <div className="projectInfo">
                        <text className="projectText">{text}</text>

                        <p className="projectSubtitle">Technologies used:</p>
                        <div className="technologiesColumns">
                            <ul className="technologiesList">
                                {firstColumnTechnologies.map((tech, index) => tech && <li key={index}>{tech}</li> )}
                            </ul>
                            {secondColumnTechnologies.length > 0 && (
                                <ul className="technologiesList">
                                    {secondColumnTechnologies.map((tech, index) => tech && <li key={index}>{tech}</li> )}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="projectImages">
                        <img className="projectImage" src={image}/>
                    </div>
                </div>

                <a className="projectLink" href={link} target="_blank">
                    <button className="sourceButton">Source</button>
                </a>
            </div>
        </Modal>
    );
}

export default ProjectModal;