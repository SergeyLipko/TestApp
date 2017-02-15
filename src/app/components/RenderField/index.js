import React from 'react'
import { css } from 'aphrodite';
import { styles as s } from './style';



const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={css(s.fieldWrapper)}>
    { touched && error
      ? <span className={css(s.fieldErrorText)}>{error}</span>
      : <label className={css(s.fieldLabelText)}>{label}</label>
    }
    <div>
      <input {...input} type={type} className={css(s.fieldInput)} />
    </div>
  </div>
);

export default RenderField
