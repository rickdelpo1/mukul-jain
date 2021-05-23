import React from "react";
import { graphql } from "gatsby";
import Header from "../component/Header";
import Glitter from "../component/Glitter";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <main className="with-padding">
        <div className="blog-post">
          <div className="blog-post-header">
            <Header title={frontmatter.title} nav={["blog"]} />
            <p className="no-margin" style={{ fontSize: 16 }}>
              {frontmatter.date}
            </p>
          </div>
          <div className="blog-post-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </main>
      <Glitter noCloud />
    </>
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
