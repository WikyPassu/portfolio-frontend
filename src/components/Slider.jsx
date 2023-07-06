import { useState } from "react";

const Slider = ({type, slides}) => {
  const [slide, setSlide] = useState(0);
  
  const route = "/assets/portfolio/";

  const handleOnNextSlideClick = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const handleOnPrevSlideClick = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="slider-container">
      <div className={type == "web" ? "slider" : "slider-app"}>
        <i className="bx bxs-left-arrow-circle arrow" onClick={() => handleOnPrevSlideClick()}></i>
        {
          slides.map((src, index) => (
            <img 
              key={index} 
              src={route + src} 
              alt=""
              className={slide === index ? "slide fade-in" : "slide slide-hidden fade-out"}
            />
          ))
        }
        <i className="bx bxs-right-arrow-circle arrow" onClick={() => handleOnNextSlideClick()}></i>
      </div>
      <div className="indicators">
        {
          slides.map((_, index) => (
            <a
              key={index}
              className={slide === index ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(index)}
            ></a>
          ))
        }
      </div>
    </div>
  );
};

export default Slider;