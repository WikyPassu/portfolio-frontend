const Footer = ({lang, languages}) => {
  const {footerES, footerEN} = languages;

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; {lang ? footerES.footerP : footerEN.footerP}
        </p>
      </div>
    </footer>
  );
};

export default Footer;