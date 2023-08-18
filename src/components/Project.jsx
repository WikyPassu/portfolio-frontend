import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import RoundButton from "./RoundButton";
import TechBalloon from "./TechBalloon";

const Project = ({index, lang, project}) => {
  const {title, descES, descEN, type, link, techs, slides} = project;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div 
      className="project-container" 
      style={width > 1025 ? index % 2 ? { flexDirection: "row-reverse" } : { flexDirection: "row" } : { flexDirection: "column" } }
    >
      <div className="project-slider">
        <Carousel itemsToShow={type === "web" ? 1 : 3} itemPadding={[1, 5]}>
          {
            slides.map((slide, index) => <img style={{ maxWidth: "100%", height: "auto" }} key={index} src={slide} alt='' />)
          }
        </Carousel>
      </div>
      <div className="project-info">
        <h1>{title}</h1>
        <p>{lang ? descES : descEN}</p>
        <div className="project-tech">
          <div className="project-balloons">
            {
              techs.map((tech, index) => <TechBalloon  key={index} tech={tech} />)
            }
          </div>
        </div>
        {
          link ?
          <RoundButton href={link} className="project-btn" icon="bx bx-link-external" /> :
          null
        }
      </div>
    </div>
  );
};

export default Project;