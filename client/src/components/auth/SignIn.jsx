/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signIn from '../../actions/auth/singinAction';
import loginValidator from '../../../../shared/utils/loginValidator';

/**
 * @class SignUp
 *
 * @returns {JSX}
 */
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.token) {
      this.props.history.push('/');
    }
  }

  checkValidity() {
    const { errors, isValid } = loginValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.checkValidity()) {
      this.setState({ errors: {} });
      this.setState({
        email: '',
        password: ''
      });
      this.props.signIn(this.state)
        .then(() => {
          this.props.history.push('/');
        });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-white mb-4 custom-header">
                Welcome back Git Sheet
              </h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0 text-center">Sign In</h3>
                    </div>
                    <div className="card-body">
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            className={
                              classnames(
                                'form-control form-control-lg rounded-0', {
                                  'is-invalid': errors.email
                                    ? !!errors.email : false
                                }
                              )
                            }
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email"
                          />
                          <div className="invalid-feedback">
                            The email field is required
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">
                            Password
                          </label>
                          <input
                            className={
                              classnames(
                                'form-control form-control-lg rounded-0', {
                                  'is-invalid': errors.password
                                    ? !!errors.password : false
                                }
                              )
                            }
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password"
                          />
                          <div className="invalid-feedback">
                            The password field is required
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn custom-btn btn-lg float-right"
                        >
                          Sign In
                        </button>
                        <p>New here? <Link to="/signup">Sign Up</Link></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func,
  history: PropTypes.object.isRequired
};

// TODO: Work here
const mapStateToProps = state => ({
  user: state.signinReducer
});

// TODO: Work here
const mapDispatchToProps = dispatch => bindActionCreators(
  { signIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
