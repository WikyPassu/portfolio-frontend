import SkillCard from "./SkillCard";

const SkillsGrid = ({skills}) => {
  return (
    <div className="skills-grid">
      {
        skills.map(({src, desc}) => <SkillCard key={desc} src={src} desc={desc}/>)
      }
    </div>
  );
};

export default SkillsGrid;