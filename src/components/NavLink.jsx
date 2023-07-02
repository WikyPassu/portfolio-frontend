const NavLink = ({href, text, active, callBack}) => {
  return (
    <a 
      href={href} 
      className={active == href ? "active" : ""}
      onClick={() => callBack(href)}
    >
      {text}
    </a>
  );
};

export default NavLink;