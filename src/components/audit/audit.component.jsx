import React, { Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { styles } from './audit.styles';
// import UploadToBlockchain from '../upload/uploadToBlockchain';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AuditComponent = ({ columnDefs, rowData, gridOptions, classes, onRowDoubleClicked, logModalOpen, handleModalClose, modalData }) => (
  <div>
    <Typography className={classes.header} variant="h4" gutterBottom>Audit</Typography>
    <Typography className={classes.subHeader} variant="body1" gutterBottom>Inspect all logs recorded logs from your Hyperledger Fabric channel</Typography>
    <div 
      className="ag-theme-balham"
      style={{ 
        height: '525px', 
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
                {modalData.category === "Processor" ?
                <Fragment>
                  <Typography variant="h6" id="modal-title">{`Vendor: ${modalData.vendor}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`Operating System: ${modalData.operatingSystem}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`MAC Address: ${modalData.MAC}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`Model: ${modalData.model}`}</Typography>
                  <Typography variant="h6" id="modal-title">{`SubVendor: ${modalData.subVendor}`}</Typography>
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
                        <ListItemText secondary={["Date used: ", data.dateTime, "\n", " Process: ", data.process]} />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
                }
              </Fragment>}
          </div>
        </Modal>
        <AgGridReact
          enableColResize
          enableSorting
          enableFilter
          pagination
          enableRangeSelection
          paginationPageSize="15"
          rowSelection="multiple"
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          allowContextMenuWithControlKey={true}
          onRowDoubleClicked={onRowDoubleClicked}
        />
    </div>
    {/* <UploadToBlockchain/> */}
  </div>
);

export default injectSheet(styles)(AuditComponent);