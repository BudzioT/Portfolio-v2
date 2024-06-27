import React from "react";
import "../sass/footer.scss"
import githubIcon from "../img/github.svg"
import linkedInIcon from "../img/linkedIn.svg"
import youtubeIcon from "../img/youtube.svg"
import twitchIcon from "../img/twitch.svg"
import twitterIcon from "../img/twitter.svg"

const Footer = () => {
    return(
        <footer id="socials">
            <a href="https://github.com/BudzioT" className="icon" target="_blank">
                <img src={githubIcon} alt="Github" className="icon"/>
            </a>
            <a href="https://github.com/BudzioT" className="footerLink" target="_blank">Github</a>
            <div className="line"/>

            <a href="https://www.linkedin.com/in/bartosz-budnik-19b4b9292/" className="icon" target="_blank">
                <img src={linkedInIcon} alt="LinkedIn" className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/bartosz-budnik-19b4b9292/"
               className="footerLink" target="_blank">LinkedIn</a>
            <div className="line"/>

            <a href="https://www.youtube.com/channel/UCMrW7FbE00-UH6XnJW6tGQQ" className="icon" target="_blank">
                <img src={youtubeIcon} alt="Youtube" className="icon"/>
            </a>
            <a href="https://www.youtube.com/channel/UCMrW7FbE00-UH6XnJW6tGQQ"
               className="footerLink" target="_blank">Youtube</a>
            <div className="line"/>

            <a href="https://www.twitch.tv/budokubud" className="icon" target="_blank">
                <img src={twitchIcon} alt="Twitch" className="icon"/>
            </a>
            <a href="https://www.twitch.tv/budokubud" className="footerLink" target="_blank">Twitch</a>
            <div className="line"/>

            <a href="" target="_blank" className="icon">
                <img src={twitterIcon} alt="Twitter" className="icon"/>
            </a>
            <a href="" target="_blank" className="footerLink">Twitter</a>

            <div className="break"/>
            <text className="copyright">© 2024 Bartosz Budnik. All rights reserved.</text>
        </footer>
    );
}

export default Footer;