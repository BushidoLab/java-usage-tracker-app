import React from 'react';
import injectSheet from 'react-jss';
import NavBarContainer from '../../components/navbar/NavBar.container';
import { styles } from './Dashboard.styles';

const Dashboard = ({ children, classes }) => (
    <div>
        <div className={classes.root}>
            <NavBarContainer />
        </div>
        <div>{children}</div>
    </div>
);

export default injectSheet(styles)(Dashboard);
