import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import validate from '../../utils/validation';
import RenderField from '../../components/RenderField';
import FromHead from '../../components/FormHead';
import { styles as s } from './style';



const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false;


const SecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className={css(s.formCard)} onSubmit={handleSubmit}>
      <FromHead text='Signup' progressStage={2}/>


    </form>
  )
};

export default reduxForm({
  form: 'main',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage)



// <Field name="email" type="email" component={RenderField} label="Email"/>
//   <div>
//   <label>Sex</label>
//   <div>
//   <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
//   <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
//   <Field name="sex" component={renderError}/>
//   </div>
//   </div>
//   <div>
//   <button type="button" className="previous" onClick={previousPage}>Previous</button>
//   <button type="submit" className="next">Next</button>
//   </div>