import React, { Component } from 'react';
import injectSheet from "react-jss";
import { styles } from "../ManagementGrid.styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const options = [
  'Java SE Advanced',
  'Java SE Advanced Desktop',
  'Java SE Suite',
  'Oracle Database Standard Edition 2',
  'Oracle Database Personal Edition',
  'Oracle Database Enterprise Edition',
  'Oracle Database Mobile Server',
  'NoSQL Database Enterprise Edition',
];

class LicenseDropdown extends Component {
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
    let license = e.target.innerHTML.substring(0, e.target.innerHTML.indexOf('<span'))
    this.setState({ selectedIndex: index, anchorEl: null, value: license });
    this.props.onClick(license)
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
            name="license"
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="License"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="License"
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

export default injectSheet(styles)(LicenseDropdown);
