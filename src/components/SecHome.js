import "../sass/secHome.scss"
import arrow from "../img/arrow.svg"

const SecHome = () => {
    return (
        <section className="home">
            <h1 className="introduction">
                I'm <font className="name">Bartosz Budnik</font>
            </h1>

            <p className="description">
                A student programmer focusing on low/mid level programming
                to make software
            </p>

            <img src={arrow} alt="down arrow" className="arrow"/>

        </section>
    );
}

export default SecHome;