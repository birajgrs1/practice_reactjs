import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "200px" }}
      >
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <i
            className="bi bi-bootstrap me-2"
            style={{ fontSize: "1.5rem" }}
          ></i>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            // onClick={() => {
            //   console.log("Home clicked.");
            // }}
          >
            {/* Home Tab */}
            <Link
              to="/"
              className={`nav-link text-white 
              `}
              aria-current="page"
            >
              <i className="bi bi-house-door me-2"></i>
              Home
            </Link>
          </li>
          <li
            // onClick={() => {
            //   console.log("Create post clicked");
            // }}
          >
            {/* Create Post Tab */}
            <Link
              to="/create-post"
              className={`nav-link text-white 
         
              `}
            >
              <i className="bi bi-speedometer2 me-2"></i>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* Dropdown User Info */}
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#new-project">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#settings">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#profile">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#sign-out">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
