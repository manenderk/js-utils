import React from "react";
import { NavLink } from "react-router-dom";

const Sidbar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/"
            className="nav-link"
          >
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </NavLink>

        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#bootstrap_components_menu"
            aria-expanded="false"
            aria-controls="bootstrap_components_menu"
          >
            <i className="icon-layout menu-icon" />
            <span className="menu-title">Bootstrap</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="bootstrap_components_menu">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink to="/bootstrap/modals" className="nav-link">
                  Modals
                </NavLink>
                
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#url_components_menu"
            aria-expanded="false"
            aria-controls="url_components_menu"
          >
            <i className="icon-layout menu-icon" />
            <span className="menu-title">URL</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="url_components_menu">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink to="/url/queryparams?first_name=manender&last_name=kumar" className="nav-link">
                  Query Params
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidbar;
