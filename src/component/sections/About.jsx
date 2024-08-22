import ContainerLayout from "../layout/ContainerLayout";
import TitleText from "../text/TitleText";
import ParagraphText from "../text/ParagraphText";

const About = () => {
  return (
    <ContainerLayout>
      <TitleText text="About" />
      <ParagraphText text="A Sydney native, I'm a Solutions Engineer with 10+ years of SaaS experience across global giants. I'm passionate about sales, web technologies, and workflow optimisation." />
      <ParagraphText text="I excel at translating complex issues into business solutions and am now focusing on Full-Stack development to create comprehensive end-to-end systems." />
    </ContainerLayout>
  );
};

export default About;
