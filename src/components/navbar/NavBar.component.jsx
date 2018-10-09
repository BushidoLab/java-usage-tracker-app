import React from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from './NavBar.styles';

const NavBarComponent = ({ classes, handleChange, value }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Router>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    scrollable
                    scrollButtons="auto"
                >
                    <Tab label="Home" value="0" component={Link} to="/" />
                    <Tab label="Management" value="1" component={Link} to="/management" />
                    <Tab label="Inspect" value="2" component={Link} to="/inspect" />
                </Tabs>
            </Router>
        </AppBar>
        {value === '0' && <Typography>Home</Typography>}
        {value === '1' && <Typography>Management</Typography>}
        {value === '2' && <Typography>Inspect</Typography>}
    </div>
);

export default injectSheet(styles)(NavBarComponent);
