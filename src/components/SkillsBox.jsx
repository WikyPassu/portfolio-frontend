import SkillsGrid from "./SkillsGrid"

const SkillsBox = ({lang, skillSection}) => {
  const {icon, titleES, titleEN, skills} = skillSection;

  return (
    <div className="skills-box">
      <i className={icon}></i>
      <h3>{lang ? titleES : titleEN}</h3>
      <SkillsGrid skills={skills}/>
    </div>
  );
};

export default SkillsBox