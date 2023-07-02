import SkillsBox from "../components/SkillsBox";
import SKILLS_SECTIONS from "../constants/Skills";

const SkillsPage = ({lang, languages}) => {
  const {skillsES, skillsEN} = languages;

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        {lang ? skillsES.headingFirst : skillsEN.headingFirst} 
        <span>{lang ? skillsES.headingSecond : skillsEN.headingSecond}</span>
      </h2>
      <div className="skills-container">
        {
          SKILLS_SECTIONS.map((skillSection, index) => (
            <SkillsBox key={index} lang={lang} skillSection={skillSection} />)
          )
        }
      </div>
    </section>
  );
};

export default SkillsPage;