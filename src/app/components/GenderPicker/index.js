import React from 'react';
import { css } from 'aphrodite';
import { styles as s } from './style';


const GenderPicker = ({input: { value, onChange }, meta: { touched, error }}) => {
  return (
    <div>
      <div className={css(s.pickerTitleWrapper)}>
        { touched && error
          ? <span className={css(s.pickerError)}>{ error }</span>
          : <span className={css(s.pickerTitle)}>GENDER</span>
        }
      </div>
      <div className={css(s.pickerFieldsWrapper)}>
        <button
          className={css(s.pickerButton)}
          type="button"
          onClick={() => onChange('male')}>
          MALE
        </button>
        <button
          className={css(s.pickerButton)}
          type="button"
          onClick={() => onChange('female')}>
          FEMALE
        </button>
        <button
          className={css(s.pickerButton)}
          type="button"
          onClick={() => onChange('unspecified')}>
          UNSPECIFIED
        </button>
      </div>
    </div>
  )
};

export default GenderPicker;