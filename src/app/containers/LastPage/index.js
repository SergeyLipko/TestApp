import React from 'react';
import { reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import DoneIcon from 'material-ui/svg-icons/action/done';
import FormHead from '../../components/FormHead';
import { styles as s } from './style';



class LastPage extends React.Component {
  render() {
    let { handleSubmit } = this.props;

    return (
      <form className={css(s.formCard)} onSubmit={handleSubmit}>
        <FormHead text='Thank you!' progressStage={3}/>

        <div className={css(s.lastFormContent)}>
          <div className={css(s.greenCircle)}>
            <DoneIcon className={css(s.doneIcon)} color='#fff'/>
          </div>

          <button className={css(s.confirmButton)} type="submit">
            Go to dashboard
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'main',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(LastPage)
