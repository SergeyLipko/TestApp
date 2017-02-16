import React from 'react';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import LastPage from '../LastPage';


class FormMain extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 2,
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  showResults = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  };


  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <FirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <SecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <LastPage previousPage={this.previousPage} onSubmit={this.showResults}/>}
      </div>
    )

  }
}

export default FormMain;