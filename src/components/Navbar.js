import profilePic from "../img/profilePic.webp"
import "../sass/navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <div className="leftNav">
                <img src={profilePic} alt="Profile" className="profilePic"/>
                <i className="name">Bartosz Budnik</i>
            </div>

            <div className="rightNav">
                <a href="/#" className="navOption">Home</a>
                <a href="/#" className="navOption">About</a>
                <a href="/#" className="navOption">Projects</a>
                <a href="/#" className="navOption">Contact</a>
                <a href="/#" className="navOption">Socials</a>
            </div>
        </nav>
    );
}

export default Navbar;