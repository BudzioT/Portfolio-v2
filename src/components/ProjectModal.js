import {useState} from "react";
import Modal from '@mui/material/Modal';
import "../sass/projectModal.scss"

const ProjectModal = ({open, onClose, image, title, text}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modalBackground">
                <div className="arrowTitle">
                    <i className="backArrow" onClick={onClose}></i>
                    <text className="modalTitle">{title}</text>
                </div>

                <div className="projectContent">
                    <div className="projectInfo">
                        <text>{text}</text>
                        <p className="projectSubtitle">Technologies used:</p>
                        <ul className="technologiesList"></ul>
                    </div>

                    <div className="projectImages">
                        <img className="projectImage" src={image}/>
                    </div>
                </div>

                <button className="sourceButton">Source</button>
            </div>
        </Modal>
    );
}

export default ProjectModal;