import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./glitter.scss";

const Glitter = ({ fixed, noCloud }) => {
  return (
    <>
      {!noCloud && (
        <img className="cloud" src={require("../images/clouds.svg").default} />
      )}
      <div className={`glitter-footer ${fixed ? "glitter-fixed" : ""}`}>
        <img
          className="city-scape"
          src={require("../images/cityscape1.svg").default}
        />
        <img className="plane" src={require("../images/plane2.png").default} />
      </div>
    </>
  );
};

export default Glitter;
