import React from 'react';
import { Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, withStyles, Paper } from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  root: {
    display: "flex",
    flex: "left"
  },
  formControl: {
    margin: "10px"
  },
  group: {
    margin: "10px"
  },
  paper: {
    float: "right",
    width: "45%",
    margin: "10px, 2.5%"
  }
}

class LicenseTypeRadio extends React.Component {
  state = {
    value: 'NUP'
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
              <FormControlLabel value="NUP" control={<Radio />} label="NUP"/>
              <FormControlLabel value="Processor" control={<Radio />} label="Processor"/>
            </RadioGroup>
          </FormControl>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(LicenseTypeRadio);