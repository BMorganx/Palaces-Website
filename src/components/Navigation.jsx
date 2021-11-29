import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <div class="nav-container">
        <div class="navigation_bar">
          <div>
            <ul>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home&nbsp;&nbsp;&nbsp;
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/order" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Order">
                  Order&nbsp;&nbsp;
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/menu" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/menu">
                  Menu&nbsp;&nbsp;
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/catering" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/catering">
                  Catering&nbsp;&nbsp;
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About us&nbsp;&nbsp;
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/cart" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/cart">
                  Cart&nbsp;&nbsp;
                </Link>
              </li>
            </ul>
          </div>
          <div class="Line-nav-outer">
            <div
              id="Line-nav"
              data-name="Line-nav"
              alt="Line-nav"
              class="Line-nav"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
