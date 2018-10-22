import React from 'react';
import { Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, withStyles } from "@material-ui/core";
import { MuiThemeProvider } from 'material-ui/styles';
import { styles } from './ManagementGrid.styles';

class LicenseRadio extends React.Component {
  state = {
    value: 'Java SE Advanced'
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render () {
    const { classes } = this.props;

    return (
      <MuiThemeProvider>
        <div className={classes.paper} elevation={2}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>License</FormLabel>
            <RadioGroup 
              name="license"
              aria-label="License"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="Java SE Suite" control={<Radio />} label="Java SE Suite"/>
              <FormControlLabel value="Java SE Advanced" control={<Radio />} label="Java SE Advanced"/>
              <FormControlLabel value="Java SE Advanced Desktop" control={<Radio />} label="Java SE Advanced Desktop"/>
            </RadioGroup>
          </FormControl>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(LicenseRadio);