import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {

return(
    <>
    <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">Add</NavLink>
        </li>
      </ul>
    </>
);
};
export default Nav;