import React, { Component } from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import ManagementGridFormComponent from './ManagementGridForm.component';
import { manageForm } from '../../graphql/mutations/manage';

class ManagementGridForm extends Component {
  state = {
    open: false,
    license: String(),
    licenseType: String(),
    quantity: Number(),
    listFee: Number(),
    discount: Number(),
    netFee: Number(),
    productSupportFee: Number(),
    softwareUpdateFee: Number(),
    otherFees: Number(),
    CDPackFee: Number(),
    unitPrice: Number()
  }

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = async e => {
    e.preventDefault();
    const { license, licenseType, quantity, listFee, discount,  netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice } = this.state;
    const { client } = this.props;

    manageForm = await client.mutate({
      mutation: manageForm,
      variables: { license, licenseType, quantity, listFee, discount, netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice }
    })
  }

  handleOpen = () => {
    this.setState({open: true})
  }


  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <ManagementGridFormComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        open={this.state.open}
        quantity
        listFee
        discount
        netFee
        productSupportFee
        softwareUpdateFee
        otherFees
        CDPackFee
        unitPrice
        />
    );
  }
}

const enhancer = compose(
  withApollo,
  withRouter,
  graphql(manageForm)
);

export default enhancer(ManagementGridForm);