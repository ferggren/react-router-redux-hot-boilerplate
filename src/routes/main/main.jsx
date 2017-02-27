'use strict';

import React from 'react';
import { exampleClick } from 'actions/example';
import { connect } from 'react-redux';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  clicks: React.PropTypes.number.isRequired,
};

class RouteMain extends React.PureComponent {
  constructor(props) {
    super(props);

    this.exampleClick = this.exampleClick.bind(this);
  }

  exampleClick() {
    this.props.dispatch(exampleClick());
  }

  render() {
    return (
      <div>
        Main route
        
        <br /><br />

        <button onClick={this.exampleClick}>
          clicks: {this.props.clicks}
        </button>
      </div>
    );
  }
}

RouteMain.propTypes = propTypes;

export default connect((state) => {
  return {
    clicks: state.example,
  };
})(RouteMain);
