import React from 'react';
import { css } from 'aphrodite';
import { styles as s } from './style';


const FormHead = ({ text, progressStage }) => {
  return (
    <div className={css(s.formHeadWrapper)}>
      <span className={css(s.formHeadTitle)}>
        { text }
      </span>

      <div className={css(s.formHeadProgressWrapper)}>
        <div className={css(
          s.formHeadProgressLine,
          progressStage === 1 && s.ProgressLineFirst,
          progressStage === 2 && s.ProgressLineSecond,
          progressStage === 3 && s.ProgressLineLast,
        )}/>
      </div>
    </div>
  )
};

export default FormHead;