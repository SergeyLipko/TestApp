import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import validate from '../../utils/validation';
import FromHead from '../../components/FormHead';
import FormBottom from '../../components/FormBottom';
import GenderPicker from '../../components/GenderPicker';
import { styles as s } from './style';





const SecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className={css(s.formCard)} onSubmit={handleSubmit}>
      <FromHead text='Signup' progressStage={2}/>

      <div>
        <Field name="gender" component={GenderPicker}/>
      </div>

      <FormBottom onBackClick={previousPage} onNextClick={handleSubmit}/>
    </form>
  )
};

export default reduxForm({
  form: 'main',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage)



