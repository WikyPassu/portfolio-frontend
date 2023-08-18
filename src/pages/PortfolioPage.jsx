// import { useState } from "react";
// import PortfolioBox from "../components/PortfolioBox";
// import ProjectModal from "../components/ProjectModal";
import Project from "../components/Project";
import PROJECTS from "../constants/Projects";

const PortfolioPage = ({lang, languages}) => {
  const {portfolioES, portfolioEN} = languages;

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        {lang ? portfolioES.headingFirst : portfolioEN.headingFirst} 
        <span>{lang ? portfolioES.headingSecond : portfolioEN.headingSecond}</span>
      </h2>
      <div className="portfolio-container">
        {
          PROJECTS.map((project, index) => (
            <Project
              key={index}
              index={index}
              lang={lang}
              project={project}
            />
          ))
        }
      </div>
    </section>
  );
};

export default PortfolioPage;