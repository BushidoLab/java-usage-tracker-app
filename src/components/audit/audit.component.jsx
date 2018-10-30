import React, { Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { styles } from './audit.styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AuditComponent = ({ columnDefs, rowData, gridOptions, classes, onRowDoubleClicked, logModalOpen, handleModalClose, modalData }) => (
  <div>
    <Typography className={classes.header} variant="h4" gutterBottom>Audit</Typography>
    <div 
      className="ag-theme-balham"
      style={{ 
        height: '400px', 
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
                  <Typography variant="h6" id="modal-title">{`Model: ${modalData.model}`}</Typography>
                </Fragment>
                :
                <Fragment>
                  <Typography variant="h6" id="modal-title">{`Vendor: ${modalData.deviceName}`}</Typography>
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
          paginationPageSize="10"
          rowSelection="multiple"
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          allowContextMenuWithControlKey={true}
          onRowDoubleClicked={onRowDoubleClicked}
        />
    </div>
  </div>
);

export default injectSheet(styles)(AuditComponent);