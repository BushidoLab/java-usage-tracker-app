import React, { Component } from 'react';
import AppBarComponent from './appbar.component';

class AppBarContainer extends Component {
  state = {
    open: false,
    anchorEl: null
  }

  handleToggle = event => {
    const currentTarget = event;
    this.setState(state => ({
      open: !state.open,
      anchorEl: currentTarget
    }));
  }

  handleClose = () => {
    this.setState(state => ({ open: false }));
  };

  render() {
    const { classes } = this.props;
    const { open, anchorEl } = this.state;

    return (
      <AppBarComponent
        handleToggle = {this.handleToggle}
        handleClose = {this.handleClose}
        open={open}
        classes={classes}
        anchorEl={anchorEl}
      />
    )
  }
}

export default AppBarContainer;