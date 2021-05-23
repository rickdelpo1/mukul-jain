import * as React from "react";

import "./project-card.scss";

const ProjectCard = ({ project }) => {
  const ref = React.useRef(null);
  return (
    <div className="flex row-center project-card-wrapper">
      <div
        tabIndex={0}
        className="project-card flex"
        onClick={() => {
          if (ref.current) {
            ref.current.click();
          }
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter" && ref.current) {
            ref.current.click();
          }
        }}
        role="button"
      >
        <a
          role="button"
          target="_blank"
          ref={ref}
          rel="noreferrer"
          href={project.websiteLink || project.githubLink}
          className="display-none"
        >
          Project url
        </a>
        <div className="image">
          <img
            className="main-image"
            src={require(`../images/work/${project.img}`).default}
            alt={project.altImg}
          />
        </div>

        <div
          tabIndex={-1}
          onKeyDown={(event) => {
            event.stopPropagation();
          }}
          role="button"
          className="details-wrapper"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="details">
            <div className="header">
              <h4>{project.name}</h4>
              {project.websiteLink && (
                <a target="_blank" rel="noreferrer" href={project.websiteLink}>
                  Website
                </a>
              )}
              {project.githubLink && (
                <a target="_blank" rel="noreferrer" href={project.githubLink}>
                  Github
                </a>
              )}
            </div>
            <h4 style={{ marginTop: 16 }}>Stack</h4>
            <p>{project.stack}</p>
            <p>
              {(project.detail || []).map((p, key) =>
                p ? (
                  <span key={key}>
                    {p} <br />
                    <br />
                  </span>
                ) : null
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
