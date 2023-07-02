const PortfolioBox = ({lang, project, handleOnProjectClick}) => {
  const {src, title, resES, resEN} = project;

  return (
    <div className="portfolio-box" onClick={() => handleOnProjectClick(project)}>
      <img src={`/assets/portfolio/${src}`} alt="" />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{lang ? resES : resEN}</p>
      </div>
    </div>
  );
};

export default PortfolioBox;