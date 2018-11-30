import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthHeader = ({ logout }) => (
  <Fragment>
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: '#3D4E81' }}
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link link" to="/">Git Sheet</Link>
        </li>
      </ul>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link link"
          >
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={logout}
            >
              Log Out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  </Fragment>
);

AuthHeader.propTypes = {
  logout: PropTypes.func.isRequired
};

export default AuthHeader;