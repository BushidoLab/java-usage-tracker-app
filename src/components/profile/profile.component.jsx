import React from 'react';
import injectSheet from 'react-jss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Input from "@material-ui/core/Input";
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
          Name: {`${firstName} ${lastName}`}I
        </Typography>
        <Typography paragraph>
          Email:{` ${email}`}
        </Typography>
        <Typography paragraph>

        </Typography>
      </CardContent>
      <Input
        type="string"
        name="URL"
        placeholder="REST API Endpoint"  
        className={classes.textField}
        variant="outlined"
        required
      />
      <Typography paragraph className={classes.credentials}>
        Credentials (If any)
      </Typography>
      <Input
        type="string"
        name="username"
        placeholder="Username"  
        className={classes.username}
        variant="outlined"
        required
      />
      <Input
        type="string"
        name="password"
        placeholder="Password"  
        className={classes.password}
        variant="outlined"
        required
      />
      <Button color="primary" variant="contained" className={classes.button}>Submit</Button>
    </Card>
  </div>
)

export default injectSheet(styles)(ProfileComponent)