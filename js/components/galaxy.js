import React from 'react';
import mui   from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

const {
  Component,
  PropTypes,
} = React;

class Galaxy extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        Application
      </div>
    );
  }
}

Galaxy.childContextTypes = {
  muiTheme: PropTypes.object
};

export default Galaxy;
