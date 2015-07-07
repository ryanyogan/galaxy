import React from 'react';
import mui   from 'material-ui';

const {
  AppBar, Card,
  CardTitle, CardText,
  LeftNav
} = mui;

const { Colors, Spacing, Typography } = mui.Styles;
const ThemeManager = new mui.Styles.ThemeManager();

const {
  Component,
  PropTypes,
} = React;

const menuItems = [
  { route: 'get-stared', text: 'Getting Started' },
];


class Galaxy extends Component {
  constructor(props) {
    super(props);

    this._handleLeftHeaderClick = this._handleLeftHeaderClick.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);

    this.state = {
      leftNavIsOpen: false
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleLeftHeaderClick(e) {
    this.refs.leftNavigation.toggle();
  }

  _onHeaderClick(e) {
    this.refs.leftNavigation.close();
  }

  getStyles() {
    return {
      cursor: 'pointer',
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopCutter,
      paddingTop: '0px',
      marginBottom: '8px',
    };
  }

  render() {
    const header = React.createElement(
      'div',
      { style: this.getStyles(), onTouchTap: this._onHeaderClick },
      'Galaxy'
    );

    return (
      <div>
        <AppBar
          title="Galaxy"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._handleLeftHeaderClick}
        />
        <Card>
          <CardTitle
            title="Advanced Prototyping"
            subtitle="Let's have some fun"
          />
          <CardText>
            This app so elegently named "Galaxy" is a first look into
            hosting a fully isomorphic, reactive, single page application
            from S3.  Play a long as we continue to updated this app and show
            off what awesome toys.
          </CardText>
        </Card>

        <LeftNav
          header={header}
          docked={false}
          isInitiallyOpen={false}
          ref="leftNavigation"
          menuItems={menuItems}
        />
      </div>
    );
  }
}

Galaxy.childContextTypes = {
  muiTheme: PropTypes.object
};

export default Galaxy;
