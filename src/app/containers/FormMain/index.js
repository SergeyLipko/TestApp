import React from 'react';
import { connect } from 'react-redux';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import LastPage from '../LastPage';
import { setFieldsToStore } from '../../redux/modules/form';


const mapDispatchToProps = dispatch => ({
  setUserCredentials: cred => dispatch(setFieldsToStore(cred)),
});

class FormMain extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  showResults = values => {
    this.props.setUserCredentials(values),
    console.log(values);
  };


  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <FirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <SecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <LastPage onSubmit={this.showResults}/>}
      </div>
    )

  }
}

export default connect(null, mapDispatchToProps)(FormMain);