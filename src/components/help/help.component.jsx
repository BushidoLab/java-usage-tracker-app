import React, {Component} from 'react';
import Typography from 'material-ui/styles/typography';

class HelpComponent extends Component {
  state = {
    open: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        {/* <List>
          {['Audit','Manage','Deploy'].map(text, index) => (

          )}
        </List> */}
      </div>
    )

    return (
      <Typography>Help</Typography>
    )
  }
}
