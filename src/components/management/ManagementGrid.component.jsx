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
        <Typography className={classes.header} variant="h4" gutterBottom>Entitlement</Typography>
        <Typography className={classes.subHeader} variant="body1" gutterBottom>Manage your owned licenses by adding them manually or importing them through CSV</Typography>
        <div
            className="ag-theme-balham"
            style={{
                height: '400px',
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
                enableRangeSelection
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
