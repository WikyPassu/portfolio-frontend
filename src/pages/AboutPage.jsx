import Button from "../components/Button";

const AboutPage = ({lang, languages}) => {
  const {aboutES, aboutEN} = languages;

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/assets/about/about-img.png" alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          {lang ? aboutES.contentFirst : aboutEN.contentFirst} 
          <span>{lang ? aboutES.contentSecond : aboutEN.contentSecond}</span>
        </h2>
        <h3>{lang ? aboutES.contentTitles : aboutEN.contentTitles}</h3>
        <p>{lang ? aboutES.contentP : aboutEN.contentP}</p>
        <Button 
          href={lang ? "/assets/about/CV-AlanPassucci.pdf" : "/assets/about/CV-AlanPassucci-EN.pdf"}
          download={lang ? "CV-AlanPassucci.pdf" : "CV-AlanPassucci-EN.pdf"}
          text={lang ? aboutES.contentBtn : aboutEN.contentBtn}
        />
      </div>
    </section>
  );
};

export default AboutPage;