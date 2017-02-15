import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import validate from '../../utils/validation';
import FormHead from '../../components/FormHead';
import FormBottom from '../../components/FormBottom';
import RenderField from '../../components/RenderField';
import { styles as s } from './style';



class FirstPage extends React.Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={css(s.formCard)} onSubmit={handleSubmit}>
        <div>
          <FormHead text='Signup' progressStage={1}/>
          <div className={css(s.formWrapper)}>
            <Field
              name="email"
              type="email"
              label="EMAIL"
              component={RenderField}/>
            <Field
              name="password"
              type="password"
              label="PASSWORD"
              component={RenderField}/>
            <Field
              name="confirmPassword"
              type="password"
              label="CONFIRM PASSWORD"
              component={RenderField}/>
          </div>
        </div>

        <FormBottom onNextClick={handleSubmit}/>
      </form>
    )
  }

}

export default reduxForm({
  form: 'main',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstPage)



// <button type="submit" className="next">
//   Next
//   </button>