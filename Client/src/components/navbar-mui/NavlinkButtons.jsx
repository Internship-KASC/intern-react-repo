import React from "react";
import {} from "react-router-dom";
import { navItems } from "./navItems";
import "./Header.css";

const NavlinkButtons = () => {
  return (
    <ul>
      {navItems.map((item, index) => {
        return (
          <li key={index}>
            <link to={item.path} className='nav-link-items'>
              {item.title}
            </link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavlinkButtons;
