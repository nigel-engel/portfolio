import ParagraphText from "../text/ParagraphText";

const Badge = ({ text, variant = "" }) => {
  return (
    <div className={`${variant} d-inline-block px-2 rounded-sm mb-2 mr-2`}>
      <ParagraphText text={text} /> 
    </div>
  );
};

export default Badge;