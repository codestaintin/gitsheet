import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from '../../actions/auth/singinAction';
import AuthHeader from './AuthHeader';
import CommonHeader from './CommonHeader';

/**
 * @export
 *
 * @class Header
 *
 * @extends {React.Component}
 */
export class Header extends Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logOut();
  }

  render() {
    const { sidebarOpen, signIn } = this.props;
    return (
      <Fragment>
        { (signIn.success)
          ? <AuthHeader logout={this.logoutUser} sidebarOpen={sidebarOpen} />
          : <CommonHeader sidebarOpen={sidebarOpen} />
        }
      </Fragment>
    );
  }
}

Header.propTypes = {
  logOut: PropTypes.func,
  sidebarOpen: PropTypes.bool,
  signIn: PropTypes.object
};

const mapStateToProps = state => ({
  signIn: state.authReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({ logOut }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);