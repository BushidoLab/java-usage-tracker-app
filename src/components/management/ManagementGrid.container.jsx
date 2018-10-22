import React, { Component, Fragment } from 'react';
import { compose, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import ManagementGridComponent from './ManagementGrid.component';
import ManagementGridFormContainer from './ManagementGridForm.container';
import { getManagement } from '../../graphql/queries/manage'

class ManagementGridContainer extends Component {
    state = {
        gridOptions: {
            columnDefs: [
                { headerName: 'Select', checkboxSelection: true, width: 40 },
                { headerName: 'Order ID', field: 'ID', width: 100 },
                { headerName: 'Description', field: 'license', width: 150, editable: true },
                { headerName: 'License Type', field: 'licenseType', width: 150, editable: true },
                { headerName: 'Quantity', field: 'quantity', width: 100, editable: true },
                { headerName: 'List Fee', field: 'listFee', width: 100, editable: true },
                { headerName: 'Discount', field: 'discount', width: 100, editable: true },
                { headerName: 'Net Fee', field: 'netFee', width: 100, editable: true },
                { headerName: 'Support Fee', field: 'supportFee', width: 110, editable: true },
                { headerName: 'Software Update Fee', field: 'softwareFee', width: 110, editable: true },
                { headerName: 'Other Fees', field: 'otherFees', width: 110, editable: true },
                { headerName: 'CD Pack Fee', field: 'CDPackFee', width: 110, editable: true },
                { headerName: 'Total Fees', field: 'totalFees', width: 110, editable: true },
            ],
        },
    };
    
    render() {
        const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
        return (
            <Fragment>
                <Query query={getManagement}>
                {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return `Error: ${error.message}`
                    return (
                       Object.values(data.getManagement).map(form => {
                            console.log(form)
                       })
                    )
                }}
                </Query>
                <ManagementGridComponent
                    columnDefs={columnDefs}
                    rowData={rowData}
                    gridOptions={gridOptions}
                />
                <ManagementGridFormContainer/>
            </Fragment>
        );
    }
}


const enhancer = compose(
    withApollo,
    withRouter
)

export default enhancer(ManagementGridContainer);
