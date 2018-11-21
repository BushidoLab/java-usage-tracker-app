import React from 'react';
import injectSheet from 'react-jss';
import AppBarContainer from "../../components/appbar/AppBar.container";
import { styles } from './Dashboard.styles';

const Dashboard = ({ children, classes }) => (
    <div>
        <div className={classes.root}>
            <AppBarContainer />
        </div>
        <div>{children}</div>
    </div>
);

export default injectSheet(styles)(Dashboard);
