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
                { headerName: 'Description', field: 'license', width: 200 },
                { headerName: 'License Type', field: 'licenseType', width: 150 },
                { headerName: 'Quantity', field: 'quantity', width: 130 },
                { headerName: 'List Fee', field: 'listFee', width: 130 },
                { headerName: 'Discount', field: 'discount', width: 130 },
                { headerName: 'Support Fee', field: 'productSupportFee', width: 130 },
                { headerName: 'Software Update Fee', field: 'softwareUpdateFee', width: 130 },
                { headerName: 'Other Fees', field: 'otherFees', width: 130 },
                { headerName: 'CD Pack Fee', field: 'cdPackFee', width: 130 },
                { headerName: 'Net Fee', field: 'netFee', width: 130 },
                // Add editable: true when we can manage cells updating
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
