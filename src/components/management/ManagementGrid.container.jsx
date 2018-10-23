import React, { Component, Fragment } from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
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
                { headerName: 'Description', field: 'license', width: 200, editable: true },
                { headerName: 'License Type', field: 'licenseType', width: 200, editable: true },
                { headerName: 'Quantity', field: 'quantity', width: 150, editable: true },
                { headerName: 'List Fee', field: 'listFee', width: 150, editable: true },
                { headerName: 'Discount', field: 'discount', width: 150, editable: true },
                { headerName: 'Net Fee', field: 'netFee', width: 150, editable: true },
                { headerName: 'Support Fee', field: 'supportFee', width: 150, editable: true },
                { headerName: 'Software Update Fee', field: 'softwareFee', width: 150, editable: true },
                { headerName: 'Other Fees', field: 'otherFees', width: 150, editable: true },
                { headerName: 'CD Pack Fee', field: 'CDPackFee', width: 150, editable: true },
                { headerName: 'Total Fees', field: 'totalFees', width: 150, editable: true },
            ],
            rowData: [],
        },
    };
    
    render() {
        const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
        const { data: { getManagement } } = this.props;
        return (
            <Fragment>
                {/* <Query query={getManagement}>
                {async ({ loading, error, data: { getManagement } }) => {
                    let formArr = [];
                    if (loading) return null;
                    if (error) return `Error: ${error.message}`
                    const rowData = await Object.values(getManagement).map(row => row)
                    this.setState({ rowData })
                }}
                </Query> */}
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
