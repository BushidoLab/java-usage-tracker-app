import React from 'react';
import { Input, Button } from "@material-ui/core";
import { styles } from "./ManagementGrid.styles";
import injectSheet from "react-jss";
import LicenseRadio from "./LicenseRadio.component";
import LicenseTypeRadio from './LicenseTypeRadio.component';

const ManagementGridForm = ({
    classes,
    quantity,
    listFee,
    discount,
    netFee,
    productSupportFee,
    softwareUpdateFee,
    otherFees,
    CDPackFee,
    handleSubmit,
    handleChange
  }) => (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit} autoComplete="off" className={classes.formContainer}>
        <div className={classes.licenses}>
          <LicenseRadio/>
          <LicenseTypeRadio/>
        </div>
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={handleChange}
          className={classes.textField}
          required
        />

        <Input
          type="number"
          name="listFee"
          placeholder="List Fee"
          value={listFee}
          onChange={handleChange}
          className={classes.textField}
          required
        />

        <Input
          type="number"
          name="discount"
          placeholder="Discount"
          value={discount}
          onChange={handleChange}
          className={classes.textField}
          required
        />

        <Input
          type="number"
          name="netFee"
          placeholder="Net Fee"
          value={netFee}
          onChange={handleChange}
          className={classes.textField}
        />

        <Input
          type="number"
          name="productSupportFee"
          placeholder="Product Support Fee"
          value={productSupportFee}
          onChange={handleChange}
          className={classes.textField}
        />

        <Input
          type="number"
          name="softwareUpdateFee"
          placeholder="Software Update Fee"
          value={softwareUpdateFee}
          onChange={handleChange}
          className={classes.textField}
        />

        <Input
          type="number"
          name="otherFees"
          placeholder="Other Fees"
          value={otherFees}
          onChange={handleChange}
          className={classes.textField}
        />

        <Input
          type="number"
          name="CDPackFee"
          placeholder="CD Pack Fee"
          value={CDPackFee}
          onChange={handleChange}
          className={classes.textField}
        />

        <Button type="submit" variant="raised">
          Submit
        </Button>
      </form>
    </div>
  )

  this.handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  this.handleSubmit = e => {
    e.preventDefault();
  }

export default injectSheet(styles)(ManagementGridForm);