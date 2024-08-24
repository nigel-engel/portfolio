import ContainerLayout from "../layout/ContainerLayout";
import TitleText from "../text/TitleText";
import WorkExperienceUI from "../ui/WorkExperienceUI";

const WorkExperience = () => {
  return (
    <ContainerLayout>
      <TitleText text="Work Experience" />
      <WorkExperienceUI
        src="/assets/linkedin-logo-icon.png"
        alt="LinkedIn logo"
        company="ReCore"
        role="Building In Public"
        date="Jun 24 - Present"
      />
      <WorkExperienceUI
        src="/assets/yotpo.png"
        alt="Yotpo logo"
        company="Yotpo"
        role="Onboarding Manager"
        date="Mar 23 - Sep 23"
      />
      <WorkExperienceUI
        src="/assets/drift.png"
        alt="Drift logo"
        company="Drift"
        role="Lead Solutions Consultant"
        date="Mar 23 - Sep 23"
      />
      <WorkExperienceUI
        src="/assets/activecampaign.png"
        alt="ActiveCampaign logo"
        company="ActiveCampaign"
        role="Solutions Consultant"
        date="Feb  - Jul 21"
      />
      <WorkExperienceUI
        src="/assets/lightspeed.png"
        alt="Lightspeed logo"
        company="Lightspeed"
        role="Customer Success"
        date="Jan 17 - Jul 19"
      />
      <WorkExperienceUI
        src="/assets/Intuit.png"
        alt="Intuit logo"
        company="Intuit"
        role="Business Development"
        date="Mar 16 - Nov 16"
      />
    </ContainerLayout>
  );
};

export default WorkExperience;
