import * as React from "react";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  const { twitter, email, github } = data.site.siteMetadata;
  return (
    <main className="with-padding">
      <div className="flex column">
        <Link to="/">Home /</Link>
        <h1 className="no-margin">Get in touch</h1>
        <div style={{ marginTop: 80 }}>
          <p>
            Mail me at <span className="underline">{email}</span>
          </p>
          <div>
            <Link
              className="underline"
              style={{ marginRight: 8 }}
              to={github}
              target="_blank"
            >
              Github
            </Link>
            <Link className="underline" to={twitter} target="_blank">
              Twitter
            </Link>
          </div>
        </div>
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
