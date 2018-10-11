import React from 'react';
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
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Management } from '../../routes/Management';
import { Inspect } from '../../routes/Inspect';
import { Audit } from '../../routes/Audit';
import LoginComponent from '../login/Login.component';
import SignUp from '../sign_up/SignUp.component';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';

const AppBarComponent = ({
  classes,
  handleMenu,
  handleClickAway,
  open,
  anchorEl
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
          render={({ location }) => (
            <div>
              <Tabs>
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
                <MenuItem>
                <Link to="/login" className={classes.link}>Log in</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/signup" className={classes.link}>Sign up</Link>
                </MenuItem>
              </Menu>
            </div>
          </ClickAwayListener>
        </div>
      </Toolbar>
    </AppBar>
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