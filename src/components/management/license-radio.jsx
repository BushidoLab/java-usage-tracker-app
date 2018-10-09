import React from 'react';
import { Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, withStyles, Paper } from "@material-ui/core";
import { MuiThemeProvider } from 'material-ui/styles';

const styles = {
  root: {
    display: "flex",
    color: 'black'
  },
  formControl: {
    margin: "10px"
  },
  group: {
    margin: "10px"
  },
  paper: {
    float: "left",
    width: "45%",
    margin: "10px, 2.5%"
  }
}

class LicenseRadio extends React.Component {
  state = {
    value: 'Java SE Advanced Desktop'
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
              <FormControlLabel value="Java SE Advanced Desktop" control={<Radio />} label="Java SE Advanced Desktop"/>
              <FormControlLabel value="Java SE Advanced" control={<Radio />} label="Java SE Advanced"/>
              <FormControlLabel value="Java SE Suite" control={<Radio />} label="Java SE Suite"/>
            </RadioGroup>
          </FormControl>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(LicenseRadio);