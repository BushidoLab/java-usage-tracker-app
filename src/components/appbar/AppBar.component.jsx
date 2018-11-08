import React from 'react';
import injectSheet from 'react-jss';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { styles } from './appbar.styles';
import Logo from '../../assets/veratrust.png';
import HelpIcon from '../../assets/baseline-help_outline-24px.svg';
import { signOut } from '../../services';
import Help from '../help/help'

const AppBarComponent = ({ classes, value, handleClick, anchorEl, openProfileTab, closeProfileTab }) => (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                <img src={Logo} alt="Veratrust: Inspect, Verify, Validate and Trust" className={classes.logo} />
            </Typography>
            <Tabs value={value} onChange={handleClick}>
                <Tab label="Home" component={Link} to="/" className={classes.tab} />
                <Tab label="Audit" component={Link} to="/audit" className={classes.tab} />
                <Tab label="Manage" component={Link} to="/management" className={classes.tab} />
                <Tab label="Deploy" component={Link} to="/deploy" className={classes.tab} />
                <Tab aria-owns={anchorEl ? 'simple-menu' : null} label="Account" onClick={openProfileTab} className={classes.tab} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeProfileTab}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={closeProfileTab} component={Link} to="/profile">Profile</MenuItem>
                    <MenuItem onClick={signOut} component={Link} to="/" >Logout</MenuItem>
                </Menu>
            </Tabs>
        <Typography
          color="inherit"
          aria-label="Open drawer"
          component={Help}
        >
            <img src={HelpIcon} alt="Help" className={classes.helpIcon} />
        </Typography>
        </Toolbar>
    </AppBar>
);

export default injectSheet(styles)(AppBarComponent);
