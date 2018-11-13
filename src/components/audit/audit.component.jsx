import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { styles } from './audit.styles';
import UploadToBlockchain from '../upload/uploadToBlockchain';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };

}

class AuditComponent extends Component {
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onBtExport = () => {
    const params = {
      headers: this.props.columnDefs,
      data: this.props.rowData,
    };
    this.gridApi.exportDataAsCsv(params);
  }

  render() {
    const { columnDefs, rowData, gridOptions, classes, onRowDoubleClicked, logModalOpen, handleModalClose, modalData } = this.props;
    return (
    <div>
      <Typography className={classes.header} variant="h4" gutterBottom>Deploy</Typography>
      <Typography className={classes.subHeader} variant="body1" gutterBottom>Inspect and review all deployed logs from your Hyperledger Fabric channel</Typography>
      <div 
        className="ag-theme-balham"
        style={{ 
          height: '500px', 
          width: '98%',
          marginLeft: '1%',
          marginRight: '1%',
          marginTop: '30px',
          marginBottom: '30px',
        }} 
      >
          <Modal
            open={logModalOpen}
            onClose={handleModalClose}
          >
            <div style={getModalStyle()} className={classes.paper} >
              {modalData && 
                <Fragment>
                  <Typography variant="h6" id="modal-title">{`Vendor: ${modalData.vendor}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`Operating System: ${modalData.operatingSystem}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`Model: ${modalData.model}`}</Typography>
                </Fragment>
                :
                <Fragment>
                  <Typography variant="h6" id="modal-title">{`Device: ${modalData.deviceName}`}</Typography>
                  <Typography variant="body1" id="modal-title">{`IP: ${modalData.IP}`}</Typography>
                  <Typography variant="body1" id="modal-title">{`Uses: ${modalData.uses}`}</Typography>
                  <List>
                    {modalData.logs.map((data, index) => (
                      <ListItem key={index}>
                        <Typography>Log #{index + 1}</Typography>
                        <ListItemText secondary={["Date used: ", data.dateTime, "Category: ", data.category]} />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
                }
              </Fragment>}
          </div>
      </div>
    </div>
    <UploadToBlockchain/>
  </div>
);

export default injectSheet(styles)(AuditComponent);