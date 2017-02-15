import React from 'react';
import { css } from 'aphrodite';
import './styles/reset.css';
import { styles as s } from './style.js';
import FormMain from './containers/FormMain';


class App extends React.Component {
  render() {
    return (
      <div className={css(s.appWrapper)}>
        <FormMain />
      </div>
    );
  }
}

export default App;

