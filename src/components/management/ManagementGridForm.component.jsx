// import React from 'react';
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import { styles } from "./ManagementGrid.styles";
// import Modal from '@material-ui/core/Modal';
// import injectSheet from "react-jss";
// import LicenseRadio from "./license-radio";
// import LicenseTypeRadio from './license-type-radio';
// import Paper from "@material-ui/core/Paper";


// const ManagementGridFormComponent= ({
//     classes,
//     handleChange,
//     handleClose,
//     handleOpen,
//     handleSubmit,
//     open,
//     quantity,
//     listFee,
//     discount,
//     netFee,
//     productSupportFee,
//     softwareUpdateFee,
//     otherFees,
//     CDPackFee,
//     unitPrice
//   }) => (
//     <div>
//     <Button onClick={handleOpen} color="primary" variant="contained" className={classes.button}>Add new license</Button>
//     <Modal
//     open={open}
//     onClose={handleClose}
//     >
//       <div className={classes.formContainer}>
//       <form onSubmit={handleSubmit} autoComplete="off" className={classes.formContainer}>
//         <div className={classes.licenses}>
//           <LicenseRadio/>
//           <LicenseTypeRadio/>
//         </div>
//         <Paper className={classes.fields}>
//           <div className={classes.inputFields}>
//             <Input
//               type="number"
//               name="quantity"
//               placeholder="Quantity"
//               value={quantity}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//               required
//             />

//             <Input
//               type="number"
//               name="listFee"
//               placeholder="List Fee"
//               value={listFee}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//               required
//             />

//             <Input
//               type="number"
//               name="discount"
//               placeholder="Discount"
//               value={discount}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//               required
//             />

//             <Input
//               type="number"
//               name="netFee"
//               placeholder="Net Fee"
//               value={netFee}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />

//             <Input
//               type="number"
//               name="productSupportFee"
//               placeholder="Product Support Fee"
//               value={productSupportFee}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />

//             <Input
//               type="number"
//               name="softwareUpdateFee"
//               placeholder="Software Update Fee"
//               value={softwareUpdateFee}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />

//             <Input
//               type="number"
//               name="otherFees"
//               placeholder="Other Fees"
//               value={otherFees}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />

//             <Input
//               type="number"
//               name="CDPackFee"
//               placeholder="CD Pack Fee"
//               value={CDPackFee}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />

//             <Input
//               type="number"
//               name="unitPrice"
//               placeholder="Unit Price"
//               value={unitPrice}
//               onChange={handleChange}
//               className={classes.textField}
//               variant="outlined"
//             />
//           </div>
//           <Button
//            type="submit"
//            variant="contained"
//            color="secondary"
//            onSubmit={handleSubmit}
//            className={classes.submit}>
//             Submit
//           </Button>
//         </Paper>
//       </form>
//     </div>
//   </Modal>
// </div>
//   )

// export default injectSheet(styles)(ManagementGridFormComponent);