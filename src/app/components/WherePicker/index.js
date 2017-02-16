import React from 'react';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Field } from 'redux-form';
import { css } from 'aphrodite';
import { styles as s } from './style';
import { variables as v } from '../../styles/utils/variables';


const WherePicker = ({ name }) => {
  return (
    <div className={css(s.wherePickerWrapper)}>
      <span className={css(s.wherePickerTitle)}>
        WHERE DID YOU HEAR ABOUT US
      </span>
      <div className={css(s.selectWrapper)}>
        <Field
          name={name}
          component="select"
          className={css(s.pickerSelect)}>
          <option />
          <option value="social">SOCIAL</option>
          <option value="media">MEDIA</option>
          <option value="friends">FRIENDS</option>
        </Field>
        <div className={css(s.pickerArrow)}>
          <ArrowDown color={v.colors.blue}/>
        </div>
      </div>
    </div>
  )
};

export default WherePicker;