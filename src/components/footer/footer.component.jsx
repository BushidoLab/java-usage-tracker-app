import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { styles } from './footer.styles.js';
import injectSheet from 'react-jss';

const FooterComponent = ({ classes }) => {
  return(
    <AppBar position="static" className={classes.footer}>
      <p>Footer</p>
    </AppBar>
  )
}

export default injectSheet(styles)(FooterComponent);