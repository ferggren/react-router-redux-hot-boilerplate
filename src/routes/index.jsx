'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrapper from 'components/app-wrapper';
import RouteMain from 'routes/main';

/* global WEB_ROOT */

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={RouteMain} />
    <Route path="*" component={RouteMain} />
  </Route>
);
