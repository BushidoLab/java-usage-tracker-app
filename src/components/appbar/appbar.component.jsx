import React from 'react';

// Material-ui imports
import AppBar from '@material-ui/core/AppBar';
import { styles } from './appbar.styles';
import injectSheet from "react-jss";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Component imports
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Management } from '../../routes/Management';
import { Inspect } from '../../routes/Inspect';
import { Audit } from '../../routes/Audit';
import LoginComponent from '../login/Login.component';
import SignUp from '../sign_up/SignUp.component';

const AppBarComponent = ({
  classes,
  handleMenu,
  handleClick,
  handleClickAway,
  open,
  anchorEl,
  value,
}) => {
return (
<Router>
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          VeraTrust
        </Typography>

        
        {/* Tab router menu */}
        <div className="App">
        <Route
          path="/"
          render={() => (
            <div>
              <Tabs value={value} onChange={handleClick}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Audit" component={Link} to="/audit" />
                <Tab label="Inspect" component={Link} to="/inspect" />
                <Tab label="Manage" component={Link} to="/management" />
              </Tabs>
              <Switch>
                <Route Redirect to="/" />
                <Route Redirect to="/audit" />
                <Route Redirect to="/inspect" />
                <Route Redirect to="/management" />
              </Switch>
            </div>
          )}
        />
      </div>


        {/* Account dropdown list */}
        <div>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                open={open}>
                <Link to="/login" className={classes.link}>
                  <MenuItem>
                      Log in
                  </MenuItem>
                </Link>
                <Link to="/signup" className={classes.link}>
                  <MenuItem>
                      Sign up
                  </MenuItem>
                </Link>
              </Menu>
            </div>
          </ClickAwayListener>
        </div>
      </Toolbar>
    </AppBar>

    {/* Routes component setup */}
    <Switch>
      <Route exact path="/" />
      <Route path="/management" component={Management} />
      <Route path="/inspect" component={Inspect} />
      <Route path="/audit" component={Audit} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </div>
</Router>
);
}

export default injectSheet(styles)(AppBarComponent);