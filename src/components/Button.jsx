const Button = ({href, onClick, text, download}) => {
  return (
    <a 
      href={href} 
      className="btn"
      download={download ? download : undefined}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Button;