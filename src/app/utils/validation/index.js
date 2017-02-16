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

  if(!values.age_day ){ errors.age_day = true }
  else if (values.age_day > 31 ) { errors.age_day = true }
  else if(values.age_day < 1) { errors.age_day = true }

  if(!values.age_month ){ errors.age_month = true }
  else if (values.age_month > 12 ) { errors.age_month = true }
  else if(values.age_month < 1) { errors.age_month = true }

  if(!values.age_year ){ errors.age_year = true }
  else if (values.age_year < 1940 ) { errors.age_year = true }
  else if(values.age_year > 1999) { errors.age_year = true }


  return errors
};

export default validate;
