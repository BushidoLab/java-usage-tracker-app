import React from 'react';
import { Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, withStyles } from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { styles } from './ManagementGrid.styles';

class LicenseTypeRadio extends React.Component {
  state = {
    value: null
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
    this.props.onChange(e.target.value);
  }

  render () {
    const { classes, license } = this.props;
    let button;

    if (license === "Java SE Advanced Desktop") {
      button = <FormControlLabel value="Processor" control={<Radio />} label="Processor" disabled/>
    } else {
      button = <FormControlLabel value="Processor" control={<Radio />} label="Processor"/>
    }
    return (
      <MuiThemeProvider>
        <div className={classes.paper}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>License Type</FormLabel>
            <RadioGroup 
              name="licenseType"
              aria-label="License Type"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {button}
              <FormControlLabel value="NUP" control={<Radio />} label="NUP"/>
            </RadioGroup>
          </FormControl>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(LicenseTypeRadio);