import React, { Component } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { styles } from "./ManagementGrid.styles";
import injectSheet from "react-jss";
import LicenseRadio from "./license-radio";
import LicenseTypeRadio from './license-type-radio';
import Modal from '@material-ui/core/Modal';

class ManagementGridForm extends Component {
  state = {
    open: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
  }

  handleOpen = () => {
    this.setState({open: true})
  }


  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="outlined">Add</Button>
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        >

          <div className={classes.formContainer}>
          <form onSubmit={this.handleSubmit} autoComplete="off" className={classes.formContainer}>
            <div className={classes.licenses}>
              <LicenseRadio/>
              <LicenseTypeRadio/>
            </div>
            <Paper className={classes.fields}>
              <div className={classes.inputFields}>
                <Input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="listFee"
                  placeholder="List Fee"
                  value={this.state.listFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="discount"
                  placeholder="Discount"
                  value={this.state.discount}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="netFee"
                  placeholder="Net Fee"
                  value={this.state.netFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="productSupportFee"
                  placeholder="Product Support Fee"
                  value={this.state.productSupportFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="softwareUpdateFee"
                  placeholder="Software Update Fee"
                  value={this.state.softwareUpdateFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="otherFees"
                  placeholder="Other Fees"
                  value={this.state.otherFees}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="CDPackFee"
                  placeholder="CD Pack Fee"
                  value={this.state.CDPackFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />
              </div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Paper>
          </form>
        </div>
      </Modal>
    </div>
    )
  }
}

export default injectSheet(styles)(ManagementGridForm);