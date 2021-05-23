import * as React from "react";
import { Link } from "gatsby";
import Toggle from "./Toggle";

const Header = ({ title, nav = ["home"] }) => {
  return (
    <div>
      <div className="flex row-space-between">
        <div>
          {nav.map((item, index) => (
            <Link
              key={index}
              style={{ textTransform: "capitalize" }}
              to={item === "home" ? "/" : `/${item}`}
            >
              {item} /
            </Link>
          ))}
        </div>

        <Toggle />
      </div>
      <h1 className="no-margin">{title}</h1>
    </div>
  );
};

export default Header;
