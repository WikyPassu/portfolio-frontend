import RoundButton from "./RoundButton";

const SocialMedia = ({socialMedia}) => {
  return (
    <div className="social-media">
      {
        socialMedia.map(({href, className, icon}) => (
          <RoundButton key={icon} href={href} className={className} icon={icon}/>)
        )
      }
    </div>
  );
};

export default SocialMedia;