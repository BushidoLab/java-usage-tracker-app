import React, { Component } from 'react';
import injectSheet from "react-jss";
import { styles } from "../ManagementGrid.styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const options = [
  'Processor',
  'NUP'
];

class LicenseTypeDropdown extends Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    value: null
  };


  handleClickListItem = e => {
    this.setState({ 
      anchorEl: e.currentTarget,
    });
  };
  
  handleMenuItemClick = (e, index) => {
    let licenseType = e.target.innerHTML.substring(0, e.target.innerHTML.indexOf('<span'))
    this.setState({ selectedIndex: index, anchorEl: null, value: licenseType });
    this.props.onClick(licenseType)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.paper}>
        <List component="nav" className={classes.formControl}>
          <ListItem
            button
            name="License Type"
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="License Type"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="License Type"
              secondary={options[this.state.selectedIndex]}
              value={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              value={option}
              name={option}
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={(event) => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
  
        </Menu>
      </div>
    );
  }
}

export default injectSheet(styles)(LicenseTypeDropdown);
