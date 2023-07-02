import { useState } from "react";
import PortfolioBox from "../components/PortfolioBox";
import ProjectModal from "../components/ProjectModal";
import PROJECTS from "../constants/Projects";

const PortfolioPage = ({lang, languages}) => {
  const [isOpened, setIsOpened] = useState(false); 
  const [currentProject, setCurrentProject] = useState();

  const html = document.getElementById("html");

  const {portfolioES, portfolioEN} = languages;

  const handleOnProjectClick = project => {
    html.classList.toggle("active");
    setIsOpened(true);
    setCurrentProject(project);
  };

  const handleOnProjectModalClose = () => {
    html.classList.toggle("active");
    setIsOpened(false);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        {lang ? portfolioES.headingFirst : portfolioEN.headingFirst} 
        <span>{lang ? portfolioES.headingSecond : portfolioEN.headingSecond}</span>
      </h2>
      <div className="portfolio-container">
        {
          PROJECTS.map((project, index) => (
            <PortfolioBox 
              key={index}
              lang={lang}
              project={project}
              handleOnProjectClick={handleOnProjectClick}
            />
          ))
        }
        <ProjectModal
          lang={lang}
          languages={languages}
          isOpened={isOpened}
          onClose={() => handleOnProjectModalClose()}
          project={currentProject}
        />
      </div>
    </section>
  );
};

export default PortfolioPage;