import * as React from "react";
import { graphql, Link } from "gatsby";
import ProjectCard from "../../component/ProjectCard";

const Projects = ({ data }) => {
  const projects = data.allDataJson.nodes;
  return (
    <main className="with-padding">
      <div className="flex column">
        <Link to="/">Home /</Link>
        <h1 className="no-margin">Projects</h1>
        <div className="flex column column-center">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;

export const query = graphql`
  {
    allDataJson {
      nodes {
        img
        altImg
        name
        stack
        what
        websiteLink
        githubLink
        detailLink
        detailTextColor
        id
        info
        detail
      }
    }
  }
`;
