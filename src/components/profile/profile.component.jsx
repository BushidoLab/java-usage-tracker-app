import React from 'react';
import injectSheet from 'react-jss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { styles } from './profile.styles';

const ProfileComponent = ({ classes }) => (
  <div>
    <Card className={classes.card}>
      <CardHeader
        title="Profile"
        subheader=""
        className={classes.header}
      />
      <CardContent>
        <Typography paragraph>
          Name: 
          {/* ${firstName} ${lastName} */}
        </Typography>
        <Typography paragraph>
          Email:
        </Typography>
        <Typography paragraph>

        </Typography>
      </CardContent>
    </Card>
  </div>
)

export default injectSheet(styles)(ProfileComponent)