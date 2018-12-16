import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-tippy/dist/tippy.css';

const Card = ({ name, gitCheats }) => (
  <Fragment>
    <div className="card border-light">
      <div className="card-header capitalise"><b>{name}</b></div>
      { gitCheats.map(cheat => {
        return (
          <div key={cheat.command} className="card-body">
            <p className="card-text">
              {cheat.description}
            </p>
            <Tooltip
              title="Click to copy to clipboard"
              size="small"
              inertia="false"
              position="right"
              trigger="mouseenter"
            >
              <CopyToClipboard text={cheat.command}>
                <p className="card-text command" id="command">
                  <b className="command">$ {cheat.command}</b>
                </p>
              </CopyToClipboard>
            </Tooltip>
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