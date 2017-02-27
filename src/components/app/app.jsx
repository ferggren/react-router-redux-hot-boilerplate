'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={window.REDUX_STORE}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
