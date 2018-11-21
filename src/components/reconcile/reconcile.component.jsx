import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import { styles } from './reconcile.styles';

const ReconcileComponent = ({ columnDefs, rowData, gridOptions, classes }) => (
  <div>
    <Typography className={classes.header} variant="h4" gutterBottom>Reconcile</Typography>
    <Typography className={classes.subHeader} variant="body1" gutterBottom>Net license position</Typography>
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
          suppressNoRowsOverlay={true}
        />
    </div>
  </div>
);

export default injectSheet(styles)(ReconcileComponent);