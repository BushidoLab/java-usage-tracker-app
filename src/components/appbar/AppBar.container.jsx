import React, { Component } from 'react';
import AppBarComponent from './AppBar.component';

class AppBarContainer extends Component {
    state = {
        value: 0,
        anchorEl: null,
        openDrawer: false,
    }

    openProfileTab = ({ currentTarget }, value) => {
        this.setState({ value, anchorEl: currentTarget });
    };

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    };

    closeProfileTab = _ => this.setState({ anchorEl: null })

    handleClick = (event, value) => {
        this.setState({ value })
    };

    render() {
        const { classes } = this.props;
        const { value, anchorEl, openDrawer } = this.state;

        return (
            <AppBarComponent
                handleClick={this.handleClick}
                value={value}
                classes={classes}
                anchorEl={anchorEl}
                openDrawer={openDrawer}
                openProfileTab={this.openProfileTab}
                closeProfileTab={this.closeProfileTab}
                handleDrawerOpen={this.handleDrawerOpen}
            />
        );
    }
}

export default AppBarContainer;
