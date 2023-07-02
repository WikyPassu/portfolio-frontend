import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { scrollReveal } from "./utils/ScrollReveal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LANGUAGES from "./constants/Languages.json";

const App = () => {
  const [lang, setLang] = useState(true);

  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <>
      <Navigation lang={lang} setLang={setLang} />
      <HomePage lang={lang} languages={LANGUAGES} />
      <AboutPage lang={lang} languages={LANGUAGES} />
      <SkillsPage lang={lang} languages={LANGUAGES} />
      <PortfolioPage lang={lang} languages={LANGUAGES} />
      <ContactPage lang={lang} languages={LANGUAGES} />
      <Footer lang={lang} languages={LANGUAGES} />
      <ToastContainer toastClassName="custom-toast" />
    </>
  );
};

export default App;