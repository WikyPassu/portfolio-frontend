import { useRef } from "react";
import Project from "../components/Project";
import PROJECTS from "../constants/Projects";
import Carousel from "@itseasy21/react-elastic-carousel";

const PortfolioPage = ({lang, languages}) => {
  const {portfolioES, portfolioEN} = languages;
  const carouselRef = useRef(null);

  const Arrow = ({type}) => {
    const pointer = !type ? "bx bxs-left-arrow-circle arrow" : "bx bxs-right-arrow-circle arrow";
    return <i className={pointer} onClick={() => !type ? carouselRef.current.slidePrev() : carouselRef.current.slideNext()} />;
  };

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
          <Arrow type={0} />
          <Arrow type={1} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;