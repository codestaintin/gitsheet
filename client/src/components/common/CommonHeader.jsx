import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ sidebarOpen }) => (
  <Fragment>
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: '#3D4E81', zIndex: sidebarOpen ? 0 : 100 }}
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link link" to="/">Git Sheet</Link>
        </li>
      </ul>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link link" to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  </Fragment>
);

Header.propTypes = {
  sidebarOpen: PropTypes.bool
};

export default Header;