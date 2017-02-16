import React from 'react';
import { css } from 'aphrodite';
import { styles as s } from './style';


const AgePicker = ({ input, placeholder, type, meta: { touched, error } }) => {
  return (
    <div>
      <input
        {...input}
        className={css(
          s.ageField,
          touched && error && s.ageFieldInvalid,
        )}
        placeholder={placeholder}
        type={type} />
    </div>
  )
};

export default AgePicker;