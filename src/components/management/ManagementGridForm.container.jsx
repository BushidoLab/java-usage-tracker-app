import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
// import { withRouter } from 'react-router-dom';
import injectSheet from "react-jss";
import Paper from "@material-ui/core/Paper";
import { manageForm } from '../../graphql/mutations/manage';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import LicenseRadio from "./license-radio";
import LicenseTypeRadio from './license-type-radio';
import { styles } from './ManagementGrid.styles';

class ManagementGridForm extends Component {
  state = {
    open: false,
    license: "",
    licenseType: "",
    quantity: "",
    listFee: "",
    discount: "",
    netFee: "",
    productSupportFee: "",
    softwareUpdateFee: "",
    otherFees: "",
    CDPackFee: "",
    unitPrice: "",
  }

  handleRadioChange = radioValue => this.setState({ license: radioValue })

  handleLicenseTypeChange = licenseTypeValue => this.setState({ licenseType: licenseTypeValue })

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = async e => {
    // e.preventDefault();
    const { license, licenseType, quantity, listFee, discount,  netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice } = this.state;
    const { client } = this.props;

    const data = await client.mutate({
      mutation: manageForm,
      variables: { license, licenseType, quantity, listFee, discount, netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice }
    })
    console.log(data);
    return data;
  }

  handleOpen = () => {
    this.setState({open: true})
  }


  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.button}>Add new license</Button>
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        >
          <div className={classes.formContainer}>
          <form onSubmit={this.handleSubmit} autoComplete="off" className={classes.formContainer}>
            <div className={classes.licenses}>
              <LicenseRadio
                onChange={this.handleRadioChange}
              />
              <LicenseTypeRadio
                onChange={this.handleLicenseTypeChange}
              />
            </div>
            <Paper className={classes.fields}>
              <div className={classes.inputFields}>
                <Input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"  
                  value={this.quantity}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="listFee"
                  placeholder="List Fee"
                  value={this.listFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="discount"
                  placeholder="Discount"
                  value={this.discount}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="netFee"
                  placeholder="Net Fee"
                  value={this.netFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="productSupportFee"
                  placeholder="Product Support Fee"
                  value={this.productSupportFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="softwareUpdateFee"
                  placeholder="Software Update Fee"
                  value={this.softwareUpdateFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="otherFees"
                  placeholder="Other Fees"
                  value={this.otherFees}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="CDPackFee"
                  placeholder="CD Pack Fee"
                  value={this.CDPackFee}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />

                <Input
                  type="number"
                  name="unitPrice"
                  placeholder="Unit Price"
                  value={this.unitPrice}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                />
              </div>
              <Button
              type="submit"
              variant="contained"
              color="secondary"
              onSubmit={this.handleSubmit}
              className={classes.submit}>
                Submit
              </Button>
            </Paper>
          </form>
        </div>
      </Modal>
    </div>
    );
  }
}

export default injectSheet(styles)(withApollo(ManagementGridForm));