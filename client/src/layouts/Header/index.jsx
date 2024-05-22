import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <img
              src="https://preview.colorlib.com/theme/course/images/logo.png"
              alt=""
            />
            <h1>COURSE</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>AboutUs</NavLink>
              </li>
              <li>
                <NavLink>Courses</NavLink>
              </li>
              <li>
                <NavLink>Elements</NavLink>
              </li>
              <li>
                <NavLink>News</NavLink>
              </li>
              <li>
                <NavLink to="/add-product">AddPage</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <img
              src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
              alt=""
            />
            <p>+43 4566 7788 2457</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
