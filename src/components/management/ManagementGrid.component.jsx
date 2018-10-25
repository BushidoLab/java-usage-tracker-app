import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import injectSheet from 'react-jss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import Typography from '@material-ui/core/Typography';
import { styles } from './ManagementGrid.styles';

const ManagementGridComponent = ({ columnDefs, rowData, gridOptions, classes }) => (
    <div>
        <Typography className={classes.header}><h1>Management</h1></Typography>
        <div
            className="ag-theme-balham"
            style={{
                height: '500px',
                width: '98%',
                marginLeft: '1%',
                marginRight: '1%',
                marginTop: '30px',
                marginBottom: '30px'
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
                gridOptions={gridOptions}
            />
        </div>
    </div>
);

export default injectSheet(styles)(ManagementGridComponent);
