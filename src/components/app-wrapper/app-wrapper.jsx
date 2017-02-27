'use strict';

import React from 'react';
import './styles';

const propTypes = {
  children: React.PropTypes.node.isRequired,
};

class AppWrapper extends React.PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}

AppWrapper.propTypes = propTypes;

export default AppWrapper;
