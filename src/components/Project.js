import "../sass/project.scss"

const Project = (image, title) => {
    return (
        <div style={{
            backgroundImage: `url(${image.image})`,
            width: '400px',
            height: '400px'
        }}>

        </div>
    );
}

export default Project;