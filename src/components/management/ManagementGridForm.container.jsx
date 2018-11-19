import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import injectSheet from "react-jss";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import LicenseTypeRadio from './utils/license-type-radio';
import { styles } from './ManagementGrid.styles';
import { manageForm } from '../../graphql/mutations/manage';
import Upload from '../upload/upload';
import Delete from './utils/delete-button';
import LicenseDropdown from './utils/license-menu';
import VendorMenu from './utils/vendor-menu';

class ManagementGridForm extends Component {
  state = {
    open: false,
    license: String(),
    vendor: String(),
    licenseType: String(),
    version: String(),
    quantity: Number(),
    listFee: Number(),
    discount: Number(),
    supportDate: Date(),
    productSupportFee: Number(),
    softwareUpdateFee: Number(),
    otherFees: Number(),
    cdPackFee: Number(),
    csi: Number(),
    vendorNumber: String(),
    unitPrice: Number(),
  }

  handleLicenseChange = dropdownValue => this.setState({ license: dropdownValue });

  handleVendorChange = vendorValue => this.setState({ vendor: vendorValue });

  handleLicenseTypeChange = licenseTypeValue => this.setState({ licenseType: licenseTypeValue })

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async e => {
    const { license, licenseType, vendor, version, quantity, listFee, discount, supportDate, productSupportFee, softwareUpdateFee, otherFees, cdPackFee, unitPrice, csi, vendorNumber } = this.state;
    const { client } = this.props;
    const user = sessionStorage.getItem('acctInfo').trim();

    await client.mutate({
      mutation: manageForm,
      variables: { license, licenseType, vendor, version, quantity, listFee, discount, supportDate, productSupportFee, softwareUpdateFee, otherFees, cdPackFee, unitPrice, csi, vendorNumber, user }
    })
    this.setState({ open: false })
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
        <Upload/>        
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.button}>Add new license</Button>
        <Delete/>
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        >
          <div className={classes.formContainer}>
          <form onSubmit={this.handleSubmit} autoComplete="off" className={classes.formContainer}>
            <div className={classes.licenses}>
              <LicenseDropdown
                onClick={this.handleLicenseChange}
              />
              <VendorMenu
                onClick={this.handleVendorChange}
              />
              <LicenseTypeRadio
                onChange={this.handleLicenseTypeChange}
                license={this.state.license}
              />
            </div>
            <Paper className={classes.fields}>
              <div className={classes.inputFields}>
                <Input
                    type="string"
                    name="version"
                    placeholder="Version Number"  
                    value={this.version}
                    onChange={this.handleChange}
                    className={classes.textField}
                    variant="outlined"
                    required
                />

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
                  name="cdPackFee"
                  placeholder="CD Pack Fee"
                  value={this.cdPackFee}
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

                <Input
                  type="number"
                  name="discount"
                  placeholder="Discount (%)"
                  value={this.discount}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="number"
                  name="csi"
                  placeholder="CSI Number"
                  value={this.csi}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <Input
                  type="string"
                  name="vendorNumber"
                  placeholder="Vendor Number"
                  value={this.vendorNumber}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  required
                />

                <TextField
                  name="supportDate"
                  label="Product support date"
                  type="date"
                  value={this.supportDate}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.date}
                />
              </div>
              <Button
              type="submit"
              variant="contained"
              color="primary"
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