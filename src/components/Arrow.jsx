const Arrow = ({type, carouselRef, length}) => {
  const pointer = !type ? "bx bxs-left-arrow-circle arrow" : "bx bxs-right-arrow-circle arrow";

  const handleOnClickArrow = () => {
    if(!type) {
      !carouselRef.current.state.activeIndex ? 
      carouselRef.current.goTo(length - 1) : 
      carouselRef.current.slidePrev();
    } else {
      carouselRef.current.state.activeIndex === length - 1 ? 
      carouselRef.current.goTo(0) : 
      carouselRef.current.slideNext();
    }
  };

  return (
    <i className={pointer} onClick={handleOnClickArrow} />
  );
};

export default Arrow;