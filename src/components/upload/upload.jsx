import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import injectSheet from "react-jss";
import { withApollo } from 'react-apollo';
// import { GridOptionsWrapper } from 'ag-grid-community';
// import XLSX from 'xlsx';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { styles } from './upload.styles';
import { singleUpload } from '../../graphql/mutations/uploads';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      open: false,
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUpload = async e => {
    e.preventDefault();
    const { file } = this.state;
    const { client } = this.props;

    const data = await client.mutate({
      mutation: singleUpload,
      variables: { file }
    })

    this.handleClose();
    console.log(data);
    console.log(file);
    return data;
  };

  handleChange = (e) => {
    this.setState({ file: e.target.value });
    console.log(this.state.file);
  }

  // convertDataToWorkbook = params => {
  //   const data = new Uint8Array(params);
  //   let arr = [];

  //   for (let i = 0; i !== data.length; ++i) {
  //     arr[i] = String.fromCharCode(data[i]);
  //   }
  //   const bstr = arr.join("");

  //   return XLSX.read(bstr, { type: "binary" })
  // }

  // populateGrid = (workbook) => {
  //   // Data we need is in the first sheet
  //   const headers = workbook.SheetNames[0];
  //   const worksheet = workbook.Sheets[headers];

  //   // The following columns are expected
  //   const columns = {
  //     'A': 'OrderID',
  //     'B': 'Description',
  //     'C': 'License Type',
  //     'D': 'Quantity',
  //     'E': 'List Fee',
  //     'F': 'Discount',
  //     'G': 'Support Fee',
  //     'H': 'Other Fees',
  //     'I': 'CD Pack Fee',
  //     'J': 'Net Fee'
  //   }

  //   let rowData = [];
  //   // Start at the second row - the first one is for headers
  //   let rowIndex = 2;

  //   // Iterate over worksheet pulling out the columns we are expecting
  //   while (worksheet['A' + rowIndex]) {
  //     let row = {};
  //     Object.keys(columns).forEach(column => {
  //       row[columns[column]] = worksheet[column + rowIndex].w;
  //     });

  //     rowData.push(row);
  //     rowIndex++;
  //   }

  //   // Set imported rowData into the grid
  //   GridOptionsWrapper.api.setRowData(rowData);
  // }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.button}>Import CSV</Button>
        
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.header}>Upload your CSV file</Typography>
            <form onSubmit={this.handleUpload}>
              <div>
                <Mutation mutation={singleUpload}>
                  {singleUpload => (
                  <div>
                    <input
                      name="file"
                      color="primary"
                      variant="contained"
                      type="file"
                      accept=".csv"
                      required
                      className={classes.input}
                      onChange={this.handleChange}
                    />
                    </div>
                  )}
                </Mutation>
                <Button className={classes.upload} color="primary" variant="contained" type="submit">Upload</Button>
              </div>
            </form>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default injectSheet(styles)(withApollo(Upload));