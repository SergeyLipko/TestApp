import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import validate from '../../utils/validation';
import FromHead from '../../components/FormHead';
import FormBottom from '../../components/FormBottom';
import AgePicker from '../../components/AgePicker';
import WherePicker from '../../components/WherePicker';
import GenderPicker from '../../components/GenderPicker';
import { styles as s } from './style';



class SecondPage extends React.Component {
  render() {
    let { handleSubmit, previousPage } = this.props;

    return (
      <form className={css(s.formCard)} onSubmit={handleSubmit}>
        <FromHead text='Signup' progressStage={2}/>

        <div className={css(s.pageFormFlow)}>
          <div className={css(s.agePickerTitleWrapper)}>
          <span className={css(s.agePickerTitle)}>
            DATE OF BIRTH
          </span>
          </div>

          <div className={css(s.agePickerWrapper)}>
            <Field
              name="age_day"
              type="text"
              placeholder="DD"
              component={AgePicker}/>
            <Field
              name="age_month"
              type="text"
              placeholder="MM"
              component={AgePicker}/>
            <Field
              name="age_year"
              type="text"
              placeholder="YYYY"
              component={AgePicker}/>
          </div>

          <Field name="gender" component={GenderPicker}/>
          <WherePicker name="whereDidYouHear"/>
        </div>

        <FormBottom onBackClick={previousPage} onNextClick={handleSubmit}/>
      </form>
    )
  }
}


export default reduxForm({
  form: 'main',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage)



