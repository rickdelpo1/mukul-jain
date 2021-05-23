import * as React from "react";
import { Link } from "gatsby";
import Toggle from "../component/Toggle";
import Glitter from "../component/Glitter";
import "../styles/index.scss";
import "../styles/home.scss";

const IndexPage = () => {
  return (
    <>
      <main className="h-100">
        <div>
          <Toggle style={{ float: "right" }} />
        </div>
        <div
          className="flex column row-center column-center h-100 home-wrapper"
          style={{ textAlign: "left" }}
        >
          <div className="home-wrapper">
            <h1 className="no-margin">Mukul Jain</h1>
            <h2 className="no-margin">Full stack developer</h2>
            <div className="flex menu">
              <h3>
                <Link to="/projects">Projects</Link>
              </h3>
              <h3>
                <Link to="/blog">Blog</Link>
              </h3>
              <h3>
                <Link to="/contact">Get in touch</Link>
              </h3>
            </div>
          </div>
        </div>
      </main>
      <Glitter fixed />
    </>
  );
};

export default IndexPage;
