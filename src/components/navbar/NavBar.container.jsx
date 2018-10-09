import React, { Component } from 'react';
import NavBarComponent from './NavBar.component';

class NavBarContainer extends Component {
    state = {
        value: 'O',
    };

    handleChange = (event, value) => this.setState({ value });

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <NavBarComponent
                classes={classes}
                handleChange={this.handleChange}
                value={value}
            />
        );
    }
}

export default NavBarContainer;

