'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import onload from 'libs/onload';
import App from 'components/app';

onload(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('react-root')
  );
});
