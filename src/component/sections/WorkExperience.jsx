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
        date="Jun 2024 - Present"
      />
      <WorkExperienceUI
        src="/assets/yotpo.png"
        alt="Yotpo logo"
        company="Yotpo"
        role="Onboarding Manager"
        date="Mar 2023 - Sep 2023"
      />
      <WorkExperienceUI
        src="/assets/drift.png"
        alt="Drift logo"
        company="Drift"
        role="Lead Solutions Consultant"
        date="Mar 2023 - Sep 2023"
      />
      <WorkExperienceUI
        src="/assets/activecampaign.png"
        alt="ActiveCampaign logo"
        company="ActiveCampaign"
        role="Solutions Consultant"
        date="Feb 2020 - Jul 2021"
      />
      <WorkExperienceUI
        src="/assets/lightspeed.png"
        alt="Lightspeed logo"
        company="Lightspeed Commerce"
        role="Customer Success"
        date="Jan 2017 - Jul 2019"
      />
      <WorkExperienceUI
        src="/assets/Intuit.png"
        alt="Intuit logo"
        company="Intuit"
        role="Business Development"
        date="Mar 2016 - Nov 2016"
      />
    </ContainerLayout>
  );
};

export default WorkExperience;
