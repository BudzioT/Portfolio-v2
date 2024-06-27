import {useState} from "react";
import Modal from '@mui/material/Modal';
import "../sass/projectModal.scss"

const ProjectModal = ({open, onClose, image, title}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modalBackground">
                <p className="modalText">This a modal</p>
            </div>
        </Modal>
    );
}

export default ProjectModal;