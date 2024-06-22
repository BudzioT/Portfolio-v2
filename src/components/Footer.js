import React from "react";
import "../sass/footer.scss"
import githubIcon from "../img/github.svg"
import linkedInIcon from "../img/linkedIn.svg"
import youtubeIcon from "../img/youtube.svg"
import twitchIcon from "../img/twitch.svg"
import twitterIcon from "../img/twitter.svg"

const Footer = () => {
    return(
        <footer>
            <img src={githubIcon} alt="Github" className="icon"/>
            <a href="https://github.com/BudzioT" className="footerLink">Github</a>
            <div className="line"/>

            <img src={linkedInIcon} alt="LinkedIn" className="icon"/>
            <a href="https://www.linkedin.com/in/bartosz-budnik-19b4b9292/"
               className="footerLink">LinkedIn</a>
            <div className="line"/>

            <img src={youtubeIcon} alt="Youtube" className="icon"/>
            <a href="https://www.youtube.com/channel/UCMrW7FbE00-UH6XnJW6tGQQ"
               className="footerLink">Youtube</a>
            <div className="line"/>

            <img src={twitchIcon} alt="Twitch" className="icon"/>
            <a href="https://www.twitch.tv/budokubud" className="footerLink">Twitch</a>
            <div className="line"/>

            <img src={twitterIcon} alt="Twitter" className="icon"/>
            <a href="" className="footerLink">Twitter</a>

            <div className="break"/>
            <text className="copyright">Copyright...</text>
        </footer>
    );
}

export default Footer;