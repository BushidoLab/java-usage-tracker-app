import React, { Component, Fragment } from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import ManagementGridComponent from './ManagementGrid.component';
import ManagementGridFormContainer from './ManagementGridForm.container';
import { getManagement } from '../../graphql/queries/manage'

class ManagementGridContainer extends Component {
    state = {
        gridOptions: {
            columnDefs: [
                { headerName: 'Select', checkboxSelection: true, width: 40 },
                { headerName: 'Order ID', field: '_id', width: 100 },
                { headerName: 'Description', field: 'license', width: 200, editable: true },
                { headerName: 'License Type', field: 'licenseType', width: 150, editable: true },
                { headerName: 'Quantity', field: 'quantity', width: 130, editable: true },
                { headerName: 'List Fee', field: 'listFee', width: 130, editable: true },
                { headerName: 'Discount', field: 'discount', width: 130, editable: true },
                { headerName: 'Support Fee', field: 'productSupportFee', width: 130, editable: true },
                { headerName: 'Software Update Fee', field: 'softwareUpdateFee', width: 130, editable: true },
                { headerName: 'Other Fees', field: 'otherFees', width: 130, editable: true },
                { headerName: 'CD Pack Fee', field: 'cdPackFee', width: 130, editable: true },
                { headerName: 'Net Fee', field: 'netFee', width: 130, editable: true },
            ],
            rowData: [],
            // cellContextMenu: ,
        },
    };
    
    render() {
        const { gridOptions, gridOptions: { columnDefs } } = this.state;
        const { data: { getManagement } } = this.props;
        return (
            <Fragment>
                <ManagementGridComponent
                    columnDefs={columnDefs}
                    rowData={getManagement}
                    gridOptions={gridOptions}
                />
                <ManagementGridFormContainer/>
            </Fragment>
        );
    }
}


const enhancer = compose(
    withApollo,
    withRouter,
    graphql(getManagement)
)

export default enhancer(ManagementGridContainer);
