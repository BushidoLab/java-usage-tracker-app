import React, { Component } from 'react';
import AppBarComponent from './AppBar1.component';

class AppBarContainer extends Component {
    state = {
        value: 0,
        anchorEl: null,
    }

    openProfileTab = ({ currentTarget }, value) => {
        this.setState({ value, anchorEl: currentTarget })
    }

    closeProfileTab = _ => this.setState({ anchorEl: null })

    handleClick = (event, value) => {
        this.setState({ value })
    };

    render() {
        const { classes } = this.props;
        const { value, anchorEl } = this.state;

        return (
            <AppBarComponent
                handleClick={this.handleClick}
                value={value}
                classes={classes}
                anchorEl={anchorEl}
                openProfileTab={this.openProfileTab}
                closeProfileTab={this.closeProfileTab}
            />
        );
    }
}

export default AppBarContainer;
