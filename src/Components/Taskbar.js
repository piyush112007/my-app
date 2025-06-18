import React from "react";
import logo from "./logo.svg";

export default function Taskbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="500" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse left"
            id="navbarSupportedContent"
          >
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  <h3>{props.homeValue}</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
