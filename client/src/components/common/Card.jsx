import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, gitCheats }) => (
  <Fragment>
    <div className="card border-light">
      <div className="card-header"><b>{name}</b></div>
      { gitCheats.map(cheat => {
        return (
          <div key={cheat.command} className="card-body">
            <p className="card-text">
              {cheat.description}
            </p>
            <p className="card-text command">
              <b>$ {cheat.command}</b>
            </p>
          </div>
        );
      })}
    </div>
  </Fragment>
);

Card.propTypes = {
  name: PropTypes.string,
  gitCheats: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Card;