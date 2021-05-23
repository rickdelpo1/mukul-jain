import React from "react";
import { graphql, Link } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <main className="with-padding">
      <Link to="/">Home /</Link>
      <Link to="/blog">Blog /</Link>
      <div className="blog-post">
        <div className="blog-post-header">
          <h1 className="no-margin">{frontmatter.title}</h1>
          <p className="no-margin" style={{ fontSize: 16 }}>
            {frontmatter.date}
          </p>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
