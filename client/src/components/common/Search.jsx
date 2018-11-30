import React, { Fragment } from 'react';

const Search = () => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input
              className="form-control border-secondary py-2"
              type="search"
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
  </Fragment>
);

export default Search;