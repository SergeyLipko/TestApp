import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { css } from 'aphrodite';
import validate from '../../utils/validation';
import FormHead from '../../components/FormHead';
import FormBottom from '../../components/FormBottom';
import RenderField from '../../components/RenderField';
import { styles as s } from './style';



class FirstPage extends React.Component {
  state = {
    animate: false,
  };

  animateComponentBody = () => {
    setTimeout(() => {
      this.setState({ animate: true })
    }, 100);
  };

  componentDidMount(){
    this.animateComponentBody();
  }

  render() {
    let { handleSubmit } = this.props;
    let { animate } = this.state;

    return (
      <form
        className={css(s.formCard, animate && s.formCardAppears)}
        onSubmit={handleSubmit}>
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



