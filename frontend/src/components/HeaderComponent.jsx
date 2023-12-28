import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              EMS
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
