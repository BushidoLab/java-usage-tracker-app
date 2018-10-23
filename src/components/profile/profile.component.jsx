import React from 'react';
import injectSheet from 'react-jss';
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { styles } from './profile.styles';

const ProfileComponent = () => (
  <div>
    <Paper>
      <Card className={classes.card}>
        <CardHeader
          title="Profile page"
          subheader=""
          className={classes.header}
        />
        <CardContent>
          <Typography paragraph>
            
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  </div>
)

export default injectSheet(styles)(ProfileComponent)