import Badge from "./Badge";
import Button from "./Button";
const ProjectCard = ({ src, project, date, description }) => {
  return (
    <div className="border rounded p-3 bg-dark mt-3">
      <img src={src} alt="" />
      <p className="fw-bold fs-2 mt-3">{project}</p>
      <p className="mb-2">{date}</p>
      <a className="fs-2 mr-5" href="https://recore-buttonmaker.vercel.app/">Website </a>
      <a className="fs-2" href="https://github.com/nigel-engel/ReCore-Button-Maker">GitHub Repo </a>
      <p className="py-3">{description}</p>
      <Badge variant="bg-secondary" text="React" />
      <Badge variant="bg-secondary" text="CSS" />
      <Badge variant="bg-secondary" text="Vercel" />
    </div>
  );
};

export default ProjectCard;
