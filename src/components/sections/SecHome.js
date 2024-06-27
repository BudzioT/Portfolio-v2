import "../../sass/sections.scss"
import arrow from "../../img/arrow.svg"
import {useHref} from "react-router-dom";

const SecHome = () => {
    return (
        <section className="home" id="home">
            <h1 className="introduction">
                I'm <font className="name">Bartosz Budnik</font>
            </h1>

            <p className="description">
                A student programmer focusing on low/mid level programming
                to make software
            </p>

            <a href="#about">
                <img src={arrow} alt="down arrow" className="arrow"/>
            </a>
        </section>
    );
}

export default SecHome;