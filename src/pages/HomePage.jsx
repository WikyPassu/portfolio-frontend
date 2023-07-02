import { useEffect } from "react";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import SOCIAL_MEDIA from "../constants/SocialMedia";
import Typed from "typed.js";

const HomePage = ({lang, languages}) => {
  const {homeES, homeEN} = languages;

  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        lang ? homeES.contentTypedFirst : homeEN.contentTypedFirst,
        lang ? homeES.contentTypedSecond : homeEN.contentTypedSecond,
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => typed.destroy();
  }, [lang]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>{lang ? homeES.contentSalute : homeEN.contentSalute}</h3>
        <h1>Alan Passucci</h1>
        <h3>{lang ? homeES.contentIm : homeEN.contentIm} <span className="multiple-text"></span></h3>
        <p>{lang ? homeES.contentP : homeEN.contentP}</p>
        <SocialMedia socialMedia={SOCIAL_MEDIA}/>
        <Button href="#about" text={lang ? homeES.contentBtn : homeEN.contentBtn}/>
      </div>
      <div className="home-img">
        <img src="/assets/home/home-img.png" alt="" />
      </div>
    </section>
  );
};

export default HomePage;