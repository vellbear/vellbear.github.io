import Project from "./Project";
import data from "./data.json";

function Projects() {
  return (
    <div className="grid gap-12 px-4">
      {data.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
