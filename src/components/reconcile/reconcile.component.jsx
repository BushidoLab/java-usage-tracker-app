import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import injectSheet from 'react-jss';
import { styles } from './reconcile.styles';

const ReconcileComponent = ({ columnDefs, rowData, gridOptions }) => (
  <div>
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
          paginationPageSize="15"
          rowSelection="multiple"
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}>
        </AgGridReact>
    </div>
  </div>
);

export default injectSheet(styles)(ReconcileComponent);