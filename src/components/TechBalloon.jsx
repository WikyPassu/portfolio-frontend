const TechBalloon = ({tech, color, textColor}) => {
  return (
    <div className="tech-balloon" style={{ background: color, color: textColor }}>
      <p>{tech}</p>
    </div>
  );
};

export default TechBalloon;