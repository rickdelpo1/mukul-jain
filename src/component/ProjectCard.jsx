import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "../styles/project-card.scss";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="flex row-center project-card-wrapper">
      <div className="project-card flex">
        <div className="image">
          <img
            className="main-image"
            src={require(`../images/work/${project.img}`).default}
            alt={project.altImg}
          />
        </div>

        <div className="details">
          <div className="header">
            <h4>{project.name}</h4>
            {project.websiteLink && (
              <Link target="_blank" to={project.websiteLink}>
                Website
              </Link>
            )}
            {project.githubLink && (
              <Link target="_blank" to={project.githubLink}>
                Github
              </Link>
            )}
          </div>
          <p>{project.info}</p>
          <h4>Stack</h4>
          <p>{project.stack}</p>
          <p>{project.detail}</p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string,
    altImg: PropTypes.string,
    detail: PropTypes.string,
    name: PropTypes.string,
    stack: PropTypes.string,
    what: PropTypes.string,
    websiteLink: PropTypes.string,
    githubLink: PropTypes.string,
    detailLink: PropTypes.string,
    detailTextColor: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default ProjectCard;
