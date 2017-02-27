'use strict';

/* eslint-disable global-require */
/* global module */
/* global NODE_ENV */

import React from 'react';
import ReactDOM from 'react-dom';
import onload from 'libs/onload';
import App from 'components/app';
import configureStore from 'reducers/';

onload(() => {
  const store = configureStore(window.REDUX_INITIAL_STATE || {});
  
  window.REDUX_INITIAL_STATE = null;
  window.REDUX_STORE = store;

  if (NODE_ENV === 'dev') {
    const AppContainer = require('react-hot-loader').AppContainer;

    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('react-root')
    );

    if (typeof module !== 'undefined' && module.hot) {
      module.hot.accept('./components/app', () => {
        const NewApp = require('components/app').default;

        ReactDOM.render(
          <AppContainer>
            <NewApp />
          </AppContainer>,
          document.getElementById('react-root')
        );
      });
    }
    
    return;
  }

  ReactDOM.render(
    <App />,
    document.getElementById('react-root')
  );
});
