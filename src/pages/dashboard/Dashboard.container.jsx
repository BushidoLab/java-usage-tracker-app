import React from 'react';
import injectSheet from 'react-jss';
// import NavBarContainer from '../../components/navbar/NavBar.container';
import AppBarContainer from "../../components/appbar/AppBar1.container";
import { styles } from './Dashboard.styles';
// import { FooterComponent } from '../../components/footer/footer.component';

const Dashboard = ({ children, classes }) => (
    <div>
        <div className={classes.root}>
            <AppBarContainer />
        </div>
        <div>{children}</div>
    </div>
);

export default injectSheet(styles)(Dashboard);
