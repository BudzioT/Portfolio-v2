import "../sass/project.scss"

const Project = ({image, title, color, back}) => {
    return (
        <div className="container">
            <div className="project" style={{
                backgroundImage: `url(${image})`,
                width: '400px',
                height: '400px'
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