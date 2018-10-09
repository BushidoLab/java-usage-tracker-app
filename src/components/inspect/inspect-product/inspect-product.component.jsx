import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from 'material-ui/IconButton';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import injectSheet from 'react-jss';
import { styles } from '../inspect.styles';
import { MuiThemeProvider } from 'material-ui/styles';

class InspectProductCard extends Component {
  state = { expanded: false };

  handleExpand = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider>
        <Card className={classes.card}>
          <CardHeader 
          title="Product Details" 
          subheader="Device Information"
          className={classes.header}
          />
          <CardContent>
            <Typography paragraph>
              Product version: 18.0_181
            </Typography>
            <Typography paragraph>
              App name: Java Advanced Desktop
            </Typography>
            <Typography paragraph>
              Users: 129
            </Typography>
            <Typography paragraph>
              User type: NUP
            </Typography>
            <Typography paragraph>
              First use: 01/15/2018
            </Typography>
            <Typography paragraph>
              Last use: 09/10/2018
            </Typography>
            <Typography paragraph>
              Last report: 06/15/2018
            </Typography>
          </CardContent>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default injectSheet(styles)(InspectProductCard);
