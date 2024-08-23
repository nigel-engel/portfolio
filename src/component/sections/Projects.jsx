import ContainerLayout from "../layout/ContainerLayout";
import TitleText from "../text/TitleText";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <ContainerLayout>
      <TitleText text="Projects" />
      <ProjectCard 
      src="/public/assets/buttonmaker.png"
      project="ReCore Button Maker"
      date="Aug 2024"
      description="For my first React project, I decided to create a button maker app that allows users to easily build and customize buttons that can be embedded into emails. My goal is to make the process user-friendly and flexible"
      />
      
     
    </ContainerLayout>
  
  )
};

export default Projects;