import * as React from "react";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  const { twitter, email, github } = data.site.siteMetadata;
  return (
    <main className="with-padding">
      <div className="flex column">
        <Link to="/">Home /</Link>
        <h1 className="no-margin">Blogs</h1>
        <div style={{ marginTop: 80 }}></div>
      </div>
    </main>
  );
};

export default Projects;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        twitter
        email
        github
      }
    }
  }
`;
