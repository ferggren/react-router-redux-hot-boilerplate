'use strict';

import React from 'react';
import './styles';

const propTypes = {
};

const defaultProps = {

};

class App extends React.PureComponent {
  render() {
    return (
      <div className="hello-world">
        Hello world!
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
