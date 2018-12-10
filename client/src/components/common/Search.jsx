import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="input-group">
          <input
            className="form-control border-secondary py-2"
            type="search"
            placeholder="Search for a git command"
            name="searchTerm"
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-dark" type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func
};

export default Search;