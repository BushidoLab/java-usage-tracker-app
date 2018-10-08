import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { styles } from './NavBar.styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import ManagementGridComponent from '../management/ManagementGrid.component';
import Inspect from '../inspect/inspect.component';

const TabContainer = (props) => {
    return (
      <Typography component="div" style={{ padding: 6 * 3 }}>
        {props.children}
      </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class NavBarComponent extends Component { 
    state = {
        value: "0"
    }
    
    handleChange = (event, value) => {
        this.setState({value})
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    scrollable
                    scrollButtons="auto">
                        <Tab label="Home" value="0">
                            <Link to="/" component={Link} />
                        </Tab>
                        <Tab label="Management" value="1">
                            <Link to="/manage" component={Link} />
                        </Tab>
                        <Tab label="Inspect">
                            <Link to="/inspect" component={Link} />
                        </Tab>
                    </Tabs>
                </AppBar>
                {value === "0" && <TabContainer>Home</TabContainer>}
                {value === "1" && <TabContainer>Management</TabContainer>}
                {value === "2" && <TabContainer>Inspect</TabContainer>}

            </div>
        )
    }
}

export default injectSheet(styles)(NavBarComponent);
