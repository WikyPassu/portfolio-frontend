import Slider from "./Slider";
import TechBalloon from "./TechBalloon";

const ProjectModal = ({lang, languages, isOpened, onClose, project}) => {
  const {portfolioES, portfolioEN} = languages;

  const handleOnOverlayClick = ({target, currentTarget}) => {
    if(target === currentTarget) onClose();
  };
  
  if(!isOpened) return null;

  return (
    <div className="overlay" onClick={handleOnOverlayClick}>
      <div className="container">
        <i className="bx bx-x close" onClick={() => onClose()}/>
        <Slider type={project.type} slides={project.slides}/>
        <div className="modal-content">
          <div className="modal-text">
            <h4>{project.title}</h4>
            <p>{lang ? project.descES : project.descEN}</p>
          </div>
          <div className="modal-tech">
            <h4>{lang ? portfolioES.modalTech : portfolioEN.modalTech}</h4>
            <div className="modal-balloons">
              {
                project.techs.map((tech, index) => <TechBalloon  key={index} tech={tech}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;