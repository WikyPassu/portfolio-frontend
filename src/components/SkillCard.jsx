const SkillCard = ({src, desc}) => {
  return (
    <div className="skill-card">
      <img src={src} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default SkillCard;