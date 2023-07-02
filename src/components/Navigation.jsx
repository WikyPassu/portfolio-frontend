import { useState, useEffect } from "react";
import NAV_LINKS from "../constants/NavLinks";
import NavLink from "./NavLink";

const Navigation = ({lang, setLang}) => {
  const [active, setActive] = useState("#home");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      let currentSection = active;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 4) {
          currentSection = `#${section.id}`;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnNavLinkClick = navLink => {
    setActive(navLink);
    setMenu(false);
  };

  const handleOnLangClick = () => {
    setLang(!lang);
    setMenu(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo">Passu</a>
      <i className={!menu ? "bx bx-menu" : "bx bx-x"} 
        id="menu-icon" 
        onClick={() => setMenu(!menu)}
      ></i>
      <nav className={!menu ? "navbar" : "navbar active"}>
        {
          NAV_LINKS.map(({href, textES, textEN}) => (
            <NavLink 
              key={href} 
              href={href} 
              text={lang ? textES : textEN} 
              active={active}
              callBack={handleOnNavLinkClick}
            />
          ))
        }
        <div 
          className="language" 
          onClick={handleOnLangClick}
        >
          <i className="bx bx-world"></i>
          <p>{lang ? "ES" : "EN"}</p>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;