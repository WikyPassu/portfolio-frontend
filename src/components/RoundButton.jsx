const RoundButton = ({href, className, icon}) => {
  return (
    <a href={href} target="_blank" className={className}><i className={icon} /></a>
  );
};

export default RoundButton;