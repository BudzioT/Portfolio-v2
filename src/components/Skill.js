import "../sass/skill.scss"

const Skill = (singleSkill) => {
    return (
        <div className="skill">
            <text className="skillText">{singleSkill.singleSkill}</text>
        </div>
    );
}

export default Skill;