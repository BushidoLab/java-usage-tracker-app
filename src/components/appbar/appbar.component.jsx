import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { styles } from './appbar.styles';
import injectSheet from "react-jss";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Management } from '../../routes/Management';
import { Inspect } from '../../routes/Inspect';
import { Audit } from '../../routes/Audit';

const AppBarComponent = ({
  classes,
  handleToggle,
  handleClose,
  open,
  anchorEl
}) => {
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu" 
            aria-haspopup="true"
            onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
            <Popper 
             open={open} 
             transition 
             disablePortal
             anchorEl={anchorEl}
             className={classes.popper}
             >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  // placement="bottom"
                  style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'bottom' }}
                  className={classes.popper}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <div>
                          <MenuList open={open}>
                            <MenuItem onClick={handleClose}><Link to="/" className={classes.link}>Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/management" className={classes.link}>Manage</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/inspect" className={classes.link}>Inspect</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/audit" className={classes.link}>Audit</Link></MenuItem>
                          </MenuList>
                        </div>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              VeraTrust
            </Typography>
            <Button color="inherit" className={classes.login}>Login</Button>
          </Toolbar>
        </AppBar>
          <Switch>
            <Route exact path="/" />
            <Route path="/management" component={Management} />
            <Route path="/inspect" component={Inspect} />
            <Route path="/audit" component={Audit} />
          </Switch>
      </div>
    </Router>
  );
}

export default injectSheet(styles)(AppBarComponent);