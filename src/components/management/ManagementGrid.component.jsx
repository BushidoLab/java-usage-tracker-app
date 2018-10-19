import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import injectSheet from 'react-jss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import { styles } from './ManagementGrid.styles';

const ManagementGridComponent = ({ columnDefs, rowData, gridOptions, getManagement }) => (
    <div>
        <div
            className="ag-theme-balham"
            style={{
                height: '300px',
                width: '98%',
                marginLeft: '1%',
                marginRight: '1%',
                marginTop: '30px',
                marginBottom: '30px'
            }}
        >
            <AgGridReact
                enableSorting
                enableFilter
                enableColResize
                rowSelection="multiple"
                rowData={rowData}
                columnDefs={columnDefs}
                gridOptions={gridOptions}
                getManagement={getManagement}
            />
        </div>
    </div>
);

export default injectSheet(styles)(ManagementGridComponent);
