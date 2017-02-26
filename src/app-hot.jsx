'use strict';

/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import onload from 'libs/onload';
import { AppContainer } from 'react-hot-loader';
import App from 'components/app';

onload(() => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('react-root')
  );

  if (module.hot) {
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
});
