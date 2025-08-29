import { ProjectsContent } from "./ProjectsContent";
import { ProjectsClient } from "./ProjectsClient";

export const Projects = () => {
  return (
    <ProjectsClient>
      <ProjectsContent />
    </ProjectsClient>
  );
};