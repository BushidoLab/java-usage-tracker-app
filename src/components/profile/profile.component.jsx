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
          Name: {`${firstName} ${lastName}`}I
        </Typography>
        <Typography paragraph>
          Email:{` ${email}`}
        </Typography>
        <Typography paragraph>

        </Typography>
      </CardContent>
      <div>
      <form method="POST" action="https://btcpay1.eastus.cloudapp.azure.com/api/v1/invoices">
          <input type="hidden" name="storeId" value="4Uag4Medx7RHdxBoHNvXExcjRPtx2VvvPyptAid8mijX" />
          <input type="hidden" name="price" value="10" />
          <input type="hidden" name="currency" value="USD" />
          <input type="image" src="https://btcpay1.eastus.cloudapp.azure.com/img/paybutton/pay.png" name="submit" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor" />
      </form>
      </div>
    </Card>
  </div>
)

export default injectSheet(styles)(ProfileComponent)