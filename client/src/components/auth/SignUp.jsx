/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpAction from '../../actions/auth/signupActions';
import registerValidator from '../../../../shared/utils/registerValidator';

/**
 * @class SignUp
 *
 * @returns {JSX}
 */
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.token) {
      this.props.history.push('/hello');
    }
  }

  checkValidity() {
    const { errors, isValid } = registerValidator(this.state);
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      this.props.signUp(this.state)
        .then(() => {
          this.props.history.push('/hello');
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
                Welcome to Git Sheet
              </h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0 text-center">Sign Up</h3>
                    </div>
                    <div className="card-body">
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            className={
                              classnames(
                                'form-control form-control-lg rounded-0', {
                                  'is-invalid': errors.firstName
                                    ? !!errors.firstName : false
                                }
                              )
                            }
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                          />
                          <div className="invalid-feedback">
                            First name field is required
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastname">LastName</label>
                          <input
                            className={
                              classnames(
                                'form-control form-control-lg rounded-0', {
                                  'is-invalid': errors.lastName
                                    ? !!errors.lastName : false
                                }
                              )
                            }
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                          />
                          <div className="invalid-feedback">
                            Last name field is required
                          </div>
                        </div>
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
                          />
                          <div className="invalid-feedback">
                            The password field is required
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <input
                            className={
                              classnames(
                                'form-control form-control-lg rounded-0', {
                                  'is-invalid': errors.confirmPassword
                                    ? !!errors.confirmPassword : false
                                }
                              )
                            }
                            type="password"
                            name="confirmPassword"
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                          />
                          <div className="invalid-feedback">
                            The confirm password field is required
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn custom-btn btn-lg float-right"
                        >
                          Sign Up
                        </button>
                        <p>Already a user? <Link to="/signin">Sign In</Link></p>
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

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.signUpReducer
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { signUpAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
