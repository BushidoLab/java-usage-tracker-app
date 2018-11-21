import React from 'react';
import injectSheet from 'react-jss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { styles } from './profile.styles';

const ProfileComponent = ({ classes, firstName, lastName, email }) => (
  <div>
    <Card className={classes.card}>
      <CardHeader
        title={firstName + "'s Profile"}
        subheader=""
        className={classes.header}
      />
      <CardContent>
        <Typography paragraph>
          Name: {`${firstName} ${lastName}`}
        </Typography>
        <Typography paragraph>
          Email:{` ${email}`}
        </Typography>
        <Typography paragraph>

        </Typography>
      </CardContent>
    </Card>
  </div>
)

export default injectSheet(styles)(ProfileComponent)