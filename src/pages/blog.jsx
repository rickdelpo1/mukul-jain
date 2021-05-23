import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../component/Header";
import Glitter from "../component/Glitter";

const Projects = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <main className="with-padding">
        <div className="flex column">
          <Header title="Blog" />
          <div style={{ marginTop: 80 }}>
            {posts.map((post, index) => (
              <div style={{ marginBottom: 24 }} key={index}>
                <Link to={post.frontmatter.slug.toLowerCase()}>
                  <h3 className="no-margin">{post.frontmatter.title}</h3>
                </Link>
                <p style={{ fontSize: 14 }}>{post.frontmatter.date}</p>
                <p>{post.frontmatter.preview}</p>
              </div>
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
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "DD MMMM YYYY")
          preview
        }
      }
    }
  }
`;
