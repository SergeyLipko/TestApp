import React from 'react';
import { css } from 'aphrodite';
import FlatButton from 'material-ui/FlatButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import { styles as s } from './style';
import { variables as v } from '../../styles/utils/variables';


const FormBottom = ({ onBackClick, onNextClick }) => {
  return (
    <div className={css(
      onBackClick ? s.formBottomWrapper : s.formBottomWrapperSingleBtn
    )}>

      {
        onBackClick &&
        <FlatButton
          onClick={onBackClick}
          className={css(s.formBottomBack)}>
          <span className={css(s.backText)}>
            Back
          </span>
        </FlatButton>
      }

      <div className={css(s.formBottomNext)}>
        <FlatButton
          type="submit"
          onClick={onNextClick}
          className={css(s.formBottomBtn)}>
          <span className={css(s.nextText)}>
            Next
          </span>
        </FlatButton>
        <ArrowForward color={v.colors.blue}/>
      </div>

    </div>
  )
};

export default FormBottom;