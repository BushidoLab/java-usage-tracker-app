import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import injectSheet from 'react-jss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import { styles } from './ManagementGrid.styles';

const ManagementGridComponent = ({ columnDefs, rowData, gridOptions }) => (
    <div>
        <div
            className="ag-theme-balham"
            style={{
                height: '300px',
                width: '98%',
                marginLeft: '1%',
                marginRight: '1%',
            }}
        >
            <AgGridReact
                enableSorting
                enableFilter
                columnDefs={columnDefs}
                rowData={rowData}
                enableColResize
                rowSelection="multiple"
                gridOptions={gridOptions}
            />
        </div>
    </div>
);

export default injectSheet(styles)(ManagementGridComponent);
