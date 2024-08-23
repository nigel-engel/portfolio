import FlexCenterLayout from "../layout/FlexCenterLayout";
import LogoImage from "../images/LogoImage";

const WorkExperienceUI = ({ src, alt, company, role, date }) => {
  return (
    <FlexCenterLayout>
      <div className="flex items-center w-100 mb-6">
        <LogoImage src={src} alt={alt} className="flex-shrink-0 mr-3" />
        <div className="ml-3 flex justify-content-between items-center flex-grow-1">
          <div className="flex flex-column">
            <div>
              <p className="fw-bold fs-3">{company}</p>
            </div>
            <div>
              <p>{role}</p>
            </div>
          </div>
          <div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </FlexCenterLayout>
  );
};

export default WorkExperienceUI;
