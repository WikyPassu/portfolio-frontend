const TechBalloon = ({tech, color}) => {
  return (
    <div className="tech-balloon" style={{ background: color }}>
      <p>{tech}</p>
    </div>
  );
};

export default TechBalloon;