import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  const activeNav =
    ({ isActive }) => (isActive ? 'active' : 'inactive')

  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Hike
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"

                to="/TripList"
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
