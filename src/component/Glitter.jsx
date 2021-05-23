import * as React from "react";
import "./glitter.scss";

const Glitter = ({ fixed, noCloud }) => {
  return (
    <>
      {!noCloud && (
        <img
          alt="clouds"
          className="cloud"
          src={require("../images/clouds.svg").default}
        />
      )}
      <div className={`glitter-footer ${fixed ? "glitter-fixed" : ""}`}>
        <img
          alt="city-scape"
          className="city-scape"
          src={require("../images/cityscape1.svg").default}
        />
        {!noCloud && (
          <img
            alt="plane"
            className="plane"
            src={require("../images/plane2.png").default}
          />
        )}
      </div>
    </>
  );
};

export default Glitter;
