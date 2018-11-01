import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import injectSheet from 'react-jss';
import { styles } from './help.styles';
import HelpIcon from '../../assets/baseline-help_outline-24px.svg';

class Help extends Component {
  state = {
    openDrawer: false,
    open: false,
  }

  handleOpenDrawer = () => {
    this.setState({ openDrawer: true });
  };

  handleClose = () => {
    this.setState({ openDrawer: false });
  };

  render() {
    const { classes } = this.props;
    const { openDrawer } = this.state

    return (
      <div className={classes.root}>
        <Button
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleOpenDrawer}
          className={classes.menuButton}
        >
          <img src={HelpIcon} alt="Help" className={classes.helpIcon} />
        </Button>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={openDrawer}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <div className={classes.root}>
            <Typography variant="h5" className={classes.header}>
              Help
            </Typography>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Audit</Typography>
                <Typography className={classes.subHeading}>Get more detailed information about the audit grid</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Manage</Typography>
                <Typography className={classes.subHeading}>Learn how to submit your purchased licenses</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  If you wish to upload your Excel worksheet into the management grid form, the following headers are expected:
                  <ul>
                    <li>OrderID</li>
                    <li>Description</li>
                    <li>License Type</li>
                    <li>Quantity</li>
                    <li>List Fee</li>
                    <li>Discount</li>
                    <li>Support Fee</li>
                    <li>Other Fees</li>
                    <li>CD Pack Fee</li>
                    <li>Net Fee</li>
                  </ul>
                  If you have payed for support please also include a Support Date field in YYYY-MM-DD format
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Deploy</Typography>
                <Typography className={classes.subHeading}>Understand what this grid's information means</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default injectSheet(styles)(Help);