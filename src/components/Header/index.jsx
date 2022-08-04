import React from "react";
import { Link } from "react-router-dom";

import "./index.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="nav-link">
        <Link to="/">Todo List</Link>
        <Link to="/post">Post</Link>
        <Link to="/3dmodel">3D Model</Link>
      </div>
    </div>
  );
};

export default Header;
