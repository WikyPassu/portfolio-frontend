import { useRef } from "react";
import Project from "../components/Project";
import PROJECTS from "../constants/Projects";
import Carousel from "@itseasy21/react-elastic-carousel";
import Arrow from "../components/Arrow";

const PortfolioPage = ({lang, languages}) => {
  const {portfolioES, portfolioEN} = languages;
  const carouselRef = useRef(null);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        {lang ? portfolioES.headingFirst : portfolioEN.headingFirst} 
        <span>{lang ? portfolioES.headingSecond : portfolioEN.headingSecond}</span>
      </h2>
      <div className="portfolio-container">
        <Carousel 
          itemPadding={[1, 5]} 
          enableSwipe={false} 
          pagination={false}
          showArrows={false}
          ref={carouselRef}
        >
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
        </Carousel>
        <div className="arrows">
          <Arrow 
            type={0}
            carouselRef={carouselRef}
            length={PROJECTS.length}
          />
          <Arrow 
            type={1}
            carouselRef={carouselRef}
            length={PROJECTS.length}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;