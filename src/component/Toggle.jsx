import * as React from "react";
import "./toggle.scss";

/**
 * Credit: Bill Heberer
 * Source: https://codepen.io/bnthor/pen/WQBNxO
 */

const Toggle = ({ style, className }) => {
  const [theme, setTheme] = React.useState(window.__theme || "dark");

  return (
    <div style={{ height: 25, ...style }} className={className}>
      <div
        class="toggleWrapper"
        aria-label="Switch between Dark and Light mode"
      >
        <input
          type="checkbox"
          class="dn"
          id="dn"
          checked={"dark" === theme}
          onChange={(event) => {
            const theme = event.target.checked ? "dark" : "light";
            setTheme(theme);
            window.__setTheme(theme);
          }}
        />
        <label htmlFor="dn" for="dn" class="toggle">
          <span class="toggle__handler">
            <span class="crater crater--1"></span>
            <span class="crater crater--2"></span>
            <span class="crater crater--3"></span>
          </span>
          <span class="star star--1"></span>
          <span class="star star--2"></span>
          <span class="star star--3"></span>
          <span class="star star--4"></span>
          <span class="star star--5"></span>
          <span class="star star--6"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
