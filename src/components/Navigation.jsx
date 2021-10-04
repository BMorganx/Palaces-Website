import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <div>
        <hr/>
      </div>
      <div class="navigation_bar">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <div>
              <ul class="navbar-nav ml-auto">
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/">
                    Home |
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/order" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/Order">
                    Order |
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/menu" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/menu">
                    Menu |
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/catering" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/catering">
                    Catering |
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/about">
                    About us |
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/cart" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/cart">
                  Cart 
                  </Link>
                </li>
                <li class="line-height-li">
                <img src="output-onlinepngtools.png" alt=""/> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <hr2/>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
