import React from 'react';
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

const NavBarComponent = ({ classes, anchorEl, handleClick, handleClose }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <div>
                    <IconButton
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Router>
                            <div>
                                <MenuItem>
                                    <Link to="/management">Management</Link>
                                </MenuItem>
                                {/* <MenuItem>
                                    <a href="/manage/add">Add License</a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="/inspect">Inspect</a>
                                </MenuItem> */}
                            </div>
                        </Router>
                    </Menu>
                </div>
                <Typography variant="title" color="inherit" className={classes.grow}>
              VeraTrust
                </Typography>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
);

export default injectSheet(styles)(NavBarComponent);
