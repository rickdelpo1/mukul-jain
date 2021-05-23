import * as React from "react";
import { Link } from "gatsby";
import Toggle from "./Toggle";

const Header = ({ title, nav = [] }) => {
  const fullNav = ["Mukul Jain", ...nav];
  return (
    <div>
      <div className="flex row-space-between">
        <div>
          {fullNav.map((item, index) => (
            <Link
              key={index}
              style={{ textTransform: "capitalize" }}
              to={index === 0 ? "/" : `/${item}`}
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
