'use strict';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case 'EXAMPLE_CLICK': {
      return state + 1;
    }

    default: {
      return state;
    }
  }
}
