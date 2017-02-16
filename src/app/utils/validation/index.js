const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'EMAIL IS REQUIRED'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'INVALID EMAIL ADDRESS'
  }

  if(!values.password) {
    errors.password = 'PASSWORD IS REQUIRED'
  }
  else if (!/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/.test(values.password)) {
    errors.password = 'INVALID PASSWORD'
  }

  if(!values.confirmPassword) {
    errors.confirmPassword = 'CONFIRM PASSWORD IS REQUIRED'
  }
  else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'PASSWORDS SHOULD BE MATCH'
  }

  if(!values.gender) {
    errors.gender = 'GENDER IS REQUIRED'
  }


  // if (!values.sex) {
  //   errors.sex = 'Required'
  // }
  // if (!values.favoriteColor) {
  //   errors.favoriteColor = 'Required'
  // }
  return errors
};

export default validate;
