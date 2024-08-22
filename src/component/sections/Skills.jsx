import ContainerLayout from "../layout/ContainerLayout";
import TitleText from "../text/TitleText";
import Badge from "../ui/Badge";
import SubTitleText from "../text/SubTitleText";

const Skills = () => {
  return (
    <ContainerLayout>
      <TitleText text="Skills" />
      <SubTitleText text="Technical Skills" />
      <Badge variant="bg-primary" text="React Native" />
      <Badge variant="bg-primary" text="Integrations" />
      <Badge variant="bg-primary" text="REST APIs" />
      <Badge variant="bg-secondary" text="Communication" />
      <Badge variant="bg-secondary" text="Teamwork" />
      <Badge variant="bg-secondary" text="Problem Solving" />
      <Badge variant="bg-success" text="Sales" />
      <Badge variant="bg-success" text="Product Demonstration" />
      <Badge variant="bg-success" text="Time Management" />
    </ContainerLayout>
  )
}

export default Skills;