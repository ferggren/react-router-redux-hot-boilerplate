'use strict';

import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import example from './example';

/* global NODE_ENV */

export default function (state = {}) {
  const reducer = combineReducers({
    example,
  });

  let composeEnhancers = compose;

  if (NODE_ENV === 'dev') {
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );

  return createStore(reducer, state, enhancer);
}
