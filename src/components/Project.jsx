import Carousel from "@itseasy21/react-elastic-carousel";
import RoundButton from "./RoundButton";
import TechBalloon from "./TechBalloon";

const Project = ({lang, project}) => {
  const {title, titleTwo, descES, descEN, type, link, techs, otherTechs, slides, color} = project;

  return (
    <div className="project-container" style={{ borderColor: color }}>
      <div className="project-slider">
        <Carousel
          itemsToShow={type === "web" ? 1 : 3} 
          itemPadding={type === "web" ? [1, 5] : [] } 
          showArrows={false}
        >
          {
            slides.map((slide, index) => <img style={{ maxWidth: type === "web" ? "100%" : "75.4%" }} key={index} src={slide} alt='' />)
          }
        </Carousel>
      </div>
      <div className="project-info">
        <h1>{title}<span style={{ color: color }}>{titleTwo}</span></h1>
        <p>{lang ? descES : descEN}</p>
        <div className="project-balloons">
          <div className="project-techs">
            {
              techs.map((src, key) => (
                <div key={key} className="project-tech">
                  <img src={src} alt="" />
                </div>
              ))
            }
          </div>
          <div className="project-other-techs">
            {
              otherTechs.map((tech, index) => <TechBalloon key={index} tech={tech} color={color} />)
            }
          </div>
        </div>
      </div>
      {
        link ?
        <RoundButton href={link} className="project-btn" icon="bx bx-link-external" /> :
        null
      }
    </div>
  );
};

export default Project;