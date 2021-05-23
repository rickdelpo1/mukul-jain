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
          <div style={{ marginTop: 80 }} className="blog">
            {posts.map((post, index) => (
              <div className="list" style={{ marginBottom: 48 }} key={index}>
                <Link to={post.frontmatter.slug.toLowerCase()}>
                  <h3 className="no-margin">{post.frontmatter.title}</h3>
                </Link>
                <p className="meta" className="no-margin">
                  {post.frontmatter.date}
                </p>
                <p className="preview">{post.frontmatter.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Glitter noCloud />
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
