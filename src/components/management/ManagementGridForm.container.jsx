import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import injectSheet from "react-jss";
import Paper from "@material-ui/core/Paper";
import { manageForm } from '../../graphql/mutations/manage';
import { deleteManagement } from '../../graphql/mutations/manage';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import LicenseRadio from "./license-radio";
import LicenseTypeRadio from './license-type-radio';
import { styles } from './ManagementGrid.styles';

class ManagementGridForm extends Component {
  state = {
    open: false,
    deleteModal: false,
    id: String(),
    license: String(),
    licenseType: String(),
    quantity: Number(),
    listFee: Number(),
    discount: Number(),
    supportDate: Date(),
    productSupportFee: Number(),
    softwareUpdateFee: Number(),
    otherFees: Number(),
    cdPackFee: Number(),
    unitPrice: Number(),
  }

  handleRadioChange = radioValue => this.setState({ license: radioValue })

  handleLicenseTypeChange = licenseTypeValue => this.setState({ licenseType: licenseTypeValue })

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async e => {
    const { license, licenseType, quantity, listFee, discount, supportDate, productSupportFee, softwareUpdateFee, otherFees, cdPackFee, unitPrice } = this.state;
    const { client } = this.props;

    const data = await client.mutate({
      mutation: manageForm,
      variables: { license, licenseType, quantity, listFee, discount, supportDate, productSupportFee, softwareUpdateFee, otherFees, cdPackFee, unitPrice }
    })
    this.setState({ open: false })
    return data;
  }

  handleDelete = async e => {
    const { id } = this.state;
    const { client } = this.props;

    const data = await client.mutate({
      mutation: deleteManagement,
      variables: { id }
    })
    this.setState({ deleteModal: false })
    return data;
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleDeleteModal = () => {
    this.setState({deleteModal: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.button}>Add new license</Button>
        <Button onClick={this.handleDeleteModal} color="primary" variant="contained" className={classes.button}>Delete</Button>

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
                  placeholder="Discount (%)"
                  value={this.discount}
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
                
                <TextField
                  name="supportDate"
                  label="Product support date"
                  type="date"
                  defaultValue="2018-10-26"
                  value={this.supportDate}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.date}
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

      <Modal
        open={this.state.deleteModal}
        onClose={this.handleClose}
      >
        <div className={classes.deleteContainer}>
          <form onSubmit={this.handleDelete} autoComplete="off" className={classes.deleteContainer}>
            <Paper>
              <Input
                type="string"
                name="id"
                placeholder="ID"
                value={this.ID}
                onChange={this.handleChange}
                className={classes.textField}
                variant="outlined"
                />
            </Paper>
          </form>
        </div>

      </Modal>
    </div>
    );
  }
}

export default injectSheet(styles)(withApollo(ManagementGridForm));