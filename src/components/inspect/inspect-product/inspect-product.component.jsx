import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

const InspectProductComponent = ({ expanded, handleExpand, classes }) => (
  <MuiThemeProvider>
    <Card>
      <CardHeader title="Product Information" subheader="Showing licensing information"/>
      <CardContent>
        <Typography>
          Version: 1.8.081
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: expanded })}
        onClick={handleExpand}
        aria-label="Show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              Sample Text 1
            </Typography>
            <Typography>
              Sample Text 2
            </Typography>
            <Typography>
              Sample Text 3
            </Typography>
            <Typography>
              Sample Text 4
            </Typography>
          </CardContent>
      </Collapse>
    </Card>
  </MuiThemeProvider>
)

export default injectSheet(styles)(InspectProductComponent);
