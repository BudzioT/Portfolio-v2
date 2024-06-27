import {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import Project from "./Project";
import project1Img from "../img/Chip8.png";

const ProjectModal = ({onClose}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modalContent">
                <div className="modalTitle">
                    Title
                </div>

                <div className="modalBody">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio
                    eos fuga labore magni nihil officiis quam rem suscipit voluptas.
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        const keyDown = (event) => {
            if (event.key === "Escape")
                closeModal();
        }

        document.addEventListener("keydown", keyDown);

        return () => {
            document.removeEventListener("keydown", keyDown);
        }
    })


    const modalRef = useRef();

    const clickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target))
            setShowModal(false);
    }


    return (
      <div className="modalBackdrop" style={{display: showModal ? "inline-block" : "none"}}
        ref={modalRef} aria-modal="true" aria-hidden={!showModal}>
          <div className="modalContent" role="dialog" aria-labelledby="ProjectInfo">
              <Project image={project1Img} title="Chip8 Emulator" color="white" back="black"/>
          </div>
      </div>
    );
}

export default ProjectModal;