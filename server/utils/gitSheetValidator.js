import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const gitSheetValidator = (data) => {
  const category = data.category.trim(),
    description = data.description.trim(),
    command = data.description.trim();
  const errors = {};

  if (Validator.isEmpty(category)) {
    errors.category = 'Category field is required';
  }

  if (Validator.isEmpty(description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(command)) {
    errors.command = 'Command field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default gitSheetValidator;