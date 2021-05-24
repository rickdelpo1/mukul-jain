import * as React from "react";
import "./toggle.scss";

/**
 * Credit: Bill Heberer
 * Source: https://codepen.io/bnthor/pen/WQBNxO
 */

const Toggle = ({ style, className }) => {
  const [theme, setTheme] = React.useState("");
  const render = React.useRef(false);
  React.useEffect(() => {
    let initialTheme = "dark";
    if (typeof window !== "undefined") {
      initialTheme = window.__theme;
    }

    // if (initialTheme !== "dark") {
    setTheme(initialTheme);
    // }
    render.current = true;
  }, []);

  return (
    <div
      hidden={!render.current}
      style={{ height: 25, ...style }}
      className={`toggle ${className}`}
    >
      <div
        className="toggleWrapper"
        aria-label="Switch between Dark and Light mode"
      >
        <input
          type="checkbox"
          className="dn"
          id="dn"
          name="dn"
          checked={"dark" === theme}
          onChange={(event) => {
            const x = event.target.checked ? "dark" : "light";
            setTheme(x);
            window.__setTheme(x);
          }}
        />
        <label htmlFor="dn" className="toggle-label">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
