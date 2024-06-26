import "../../sass/sections.scss"
import Skill from "../Skill"

const SecAbout = () => {
    return (
        <section className="about">
            <text className="title">About me</text>
            <hr className="underline"/>
            <div className="subtitles">
                <text className="subtitle">Information</text>
                <text className="subtitle">Skills</text>
            </div>
            <div className="aboutDetails">
                <div className="aboutInfo">
                    <text className="info">
                        <p>
                            I love to create all kinds of software, especially games and
                            emulators.
                        </p>
                        <p>
                            I mainly use C and C++, but sometimes higher-level languages too.
                        While doing this, in more complex projects I use Linux, which I love.
                        </p>
                        <p>
                            I'm a fast learner, I really like to study and analyze things.
                        </p>
                        <p>
                            I take an interest in system, AI and game development, but also
                            photo, video montage and recording.
                        </p>
                    </text>
                </div>

                <div className="skills">
                    <Skill singleSkill="C++"/>
                    <Skill singleSkill="Objective-C"/>
                    <Skill singleSkill="Python"/>
                    <Skill singleSkill="DSA"/>
                    <Skill singleSkill="SDL2"/>
                    <Skill singleSkill="OpenGL"/>
                    <Skill singleSkill="C#"/>
                    <Skill singleSkill="Rust"/>
                    <Skill singleSkill="Unreal Engine"/>
                    <Skill singleSkill="SQL"/>

                </div>
            </div>
        </section>
    );
}

export default SecAbout;