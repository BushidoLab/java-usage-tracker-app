import React, { Component } from 'react';
import AppBarComponent from './AppBar1.component';

class AppBarContainer extends Component {
    state = {
        value: 0,
    }

    handleClick = (event, value) => {
        this.setState({ value })
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <AppBarComponent
                handleClick={this.handleClick}
                value={value}
                classes={classes}
            />
        );
    }
}

export default AppBarContainer;
