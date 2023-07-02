import RoundButton from "./RoundButton";

const SocialMedia = ({socialMedia}) => {
  return (
    <div className="social-media">
      {
        socialMedia.map(({href, icon}) => <RoundButton key={icon} href={href} icon={icon}/>)
      }
    </div>
  );
};

export default SocialMedia;