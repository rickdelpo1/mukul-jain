import * as React from "react";
import { graphql } from "gatsby";
import Header from "../../component/Header";
import ProjectCard from "../../component/ProjectCard";
import Glitter from "../../component/Glitter";

const Projects = ({ data }) => {
  const projects = data.allDataJson.nodes;

  return (
    <>
      <main className="with-padding">
        <div className="flex column">
          <Header title="Projects" />
          <div className="flex column column-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Glitter />
    </>
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
