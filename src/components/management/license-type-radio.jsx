import React from 'react';
import { Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, withStyles } from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { styles } from './ManagementGrid.styles';

class LicenseTypeRadio extends React.Component {
  state = {
    value: 'Processor'
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render () {
    const { classes } = this.props;

    return (
      <MuiThemeProvider>
        <div className={classes.paper}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>License Type</FormLabel>
            <RadioGroup 
              name="license-type"
              aria-label="License Type"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="Processor" control={<Radio />} label="Processor"/>
              <FormControlLabel value="NUP" control={<Radio />} label="NUP"/>
            </RadioGroup>
          </FormControl>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(LicenseTypeRadio);