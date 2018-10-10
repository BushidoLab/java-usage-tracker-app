import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MuiThemeProvider } from 'material-ui/styles';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import { styles } from '../inspect.styles';

class InspectUsageCard extends Component {
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
          title="Device Inspection" 
          subheader="Device Usage Information"
          className={classes.header}
          />
          <CardContent>
            <Typography paragraph>
              Physical server name: Server 1
            </Typography>
            <Typography paragraph>
              IP address: 73.25.44.88
            </Typography>
            <Typography paragraph>
              Manufacturer: HP
            </Typography>
            <Typography paragraph>
              Make: Proliant
            </Typography>
            <Typography paragraph>
              Model: DL385p
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded })}
            onClick={this.handleExpand}
            aria-label="Show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <div className={classes.left}>
                  <Typography paragraph>
                    <h2>Processor Information</h2>
                  </Typography>
                  <Typography paragraph>
                    Manufacturer: AMD
                  </Typography>
                  <Typography paragraph>
                    Make: Opteron
                  </Typography>
                  <Typography paragraph>
                    Speed: 3300 MHz
                  </Typography>
                  <Typography paragraph>
                    Processor (sockets): 4
                  </Typography>
                  <Typography paragraph>
                    Speed: 3300 MHz
                  </Typography>
                  <Typography paragraph>
                    Cores: 6
                  </Typography>
                  <Typography paragraph>
                    Threads: N/A
                  </Typography>
                </div>
                <div className={classes.right}>
                  <Typography paragraph>
                    <h2>Operating Environment</h2>
                  </Typography>
                  <Typography paragraph>
                    Virtualization: Hypervisor
                  </Typography>
                  <Typography paragraph>
                    Virtual server name: Server1
                  </Typography>
                  <Typography paragraph>
                    Operating system: Ubunutu
                  </Typography>
                  <Typography paragraph>
                    Version: 16.04
                  </Typography>
                  <Typography paragraph>
                    Architecture: x86
                  </Typography>
                </div>
              </CardContent>
          </Collapse>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default injectSheet(styles)(InspectUsageCard);
