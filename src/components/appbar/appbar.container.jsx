import React, { Component } from 'react';
import AppBarComponent from './appbar.component';

class AppBarContainer extends Component {
  state = {
    open: false,
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickAway = () => {
    this.setState({ open: false, anchorEl: null })
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBarComponent
        handleClick = {this.handleClick}
        handleMenu = {this.handleMenu}
        handleClickAway = {this.handleClickAway}
        open={open}
        classes={classes}
        anchorEl={anchorEl}
      />
    )
  }
}

export default AppBarContainer;