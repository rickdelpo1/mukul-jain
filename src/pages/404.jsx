import * as React from "react";
import { Link } from "gatsby";
import Header from "../component/Header";
import Glitter from "../component/Glitter";
import Seo from "../component/SEO";

const Projects = () => {
  return (
    <>
      <Seo title="404" />
      <main className="with-padding">
        <div className="flex column">
          <Header />
          <div>
            <h1>Page Not Found</h1>
            <h1>Code: 404</h1>
            <h3>
              Hey there, you seems lost!{" "}
              <Link className="highlight" to="/">
                Go Home
              </Link>
            </h3>
          </div>
        </div>
      </main>
      <Glitter fixed />
    </>
  );
};

export default Projects;
