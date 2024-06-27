import profilePic from "../img/profilePic.jpg"
import "../sass/navbar.scss"

const Navbar = ({first, second, third, fourth, fifth}) => {
    return (
        <nav>
            <div className="leftNav">
                <img src={profilePic} alt="Profile" className="profilePic"/>
                <i className="name">Bartosz Budnik</i>
            </div>

            <div className="rightNav">
                <a href={'#' + first} className="navOption">
                    {first.charAt(0).toUpperCase() + first.slice(1)}
                </a>
                <a href={'#' + second} className="navOption">
                    {second.charAt(0).toUpperCase() + second.slice(1)}
                </a>
                <a href={'#' + third} className="navOption">
                    {third.charAt(0).toUpperCase() + third.slice(1)}
                </a>
                <a href={'#' + fourth} className="navOption">
                    {fourth.charAt(0).toUpperCase() + fourth.slice(1)}
                </a>
                <a href={'#' + fifth} className="navOption">
                    {fifth.charAt(0).toUpperCase() + fifth.slice(1)}
                </a>
            </div>
        </nav>
    );
}

export default Navbar;