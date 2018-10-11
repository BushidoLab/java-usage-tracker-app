import React, { Component } from 'react';
import AppBarComponent from './appbar.component';

class AppBarContainer extends Component {
  state = {
    open: false,
    anchorEl: null,
    value: 0,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickAway = () => {
    this.setState({ open: false, anchorEl: null })
  };

  handleClick = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, value } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBarComponent
        handleClick = {this.handleClick}
        handleMenu = {this.handleMenu}
        handleClickAway = {this.handleClickAway}
        open={open}
        classes={classes}
        anchorEl={anchorEl}
        value={value}
      />
    )
  }
}

export default AppBarContainer;