import "../sass/project.scss"

const Project = ({image, title, color, back, onClick}) => {
    return (
        <div className="container" onClick={onClick}>
            <div className="project" style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="projectTitleBackground" style={{background: back}}>
                    <text className="projectTitle" style={{color: color}}>
                        {title}
                    </text>
                </div>
            </div>
        </div>
    );
}

export default Project;