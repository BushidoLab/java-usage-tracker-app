import React, { Component } from 'react';
import NavBarComponent from './NavBar.component';

class NavBarContainer extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = ({ currentTarget }) => this.setState({ anchorEl: currentTarget });

    handleClose = _ => this.setState({ anchorEl: null });

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <NavBarComponent
                classes={classes}
                anchorEl={anchorEl}
                handleClick={this.handleClick}
                handleClose={this.handleClose}
            />
        );
    }
}

export default NavBarContainer;

