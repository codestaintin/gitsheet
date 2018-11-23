import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const registerValidate = (data) => {
  const firstName = data.firstName.trim(),
    lastName = data.lastName.trim(),
    email = data.email.trim(),
    password = data.password.trim(),
    confirmPassword = data.confirmPassword.trim();
  const errors = {};

  if (!Validator.isEmpty(firstName)) {
    const hasNumber = firstName.split('')
      .filter(character => Validator.toInt(character));
    if (hasNumber.length !== 0) {
      errors.firstName = 'First name must contain alphabetic characters only';
    }
  } else { errors.firstName = 'First name required'; }

  if (!Validator.isEmpty(lastName)) {
    const hasNumber = lastName.split('')
      .filter(character => Validator.toInt(character));
    if (hasNumber.length !== 0) {
      errors.lastName = 'Last name must contain alphabetic characters only';
    }
  } else { errors.lastName = 'Last name required'; }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(password, { min: 5, max: 30 })) {
    errors.password = 'Password must have at least 6 characters';
  }

  if (Validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Confirm password is required';
  }

  if (!Validator.equals(password, confirmPassword)) {
    errors.confirmPassword = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default registerValidate;