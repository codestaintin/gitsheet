import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const loginValidate = (data) => {
  const email = data.email.trim(),
    password = data.password.trim();
  const errors = {};

  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default loginValidate;