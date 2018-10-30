import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter, Router, Link, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from './NavBar.styles';
import { Management } from '../../routes/Management';
import { Inspect } from '../../routes/Inspect';

const NavBarComponent = ({ classes, handleChange, value }) => (
    <BrowserRouter>
        <div className={classes.root}>
            <AppBar position="static">
                <Route path="/">
                    <Fragment>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            scrollable
                            scrollButtons="auto"
                        >
                            <Tab label="Home" value="/" component={Link} to="/" />
                            <Tab label="Management" value="/management" component={Link} to="/management" />
                            <Tab label="Inspect" value="/inspect" component={Link} to="/inspect" />
                        </Tabs>
                        <Switch>
                            <Route path="/"/>
                            <Route path="/management" component={Management} />
                            <Route exact path="/inspect" component={Inspect} />
                        </Switch>
                    </Fragment>
                </Route>
            </AppBar>
        </div>
    </BrowserRouter>
);

export default injectSheet(styles)(NavBarComponent);
