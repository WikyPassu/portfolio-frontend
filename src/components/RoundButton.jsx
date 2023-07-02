const RoundButton = ({href, icon}) => {
  return (
    <a href={href} target="_blank" className="round-btn"><i className={icon}></i></a>
  );
};

export default RoundButton;