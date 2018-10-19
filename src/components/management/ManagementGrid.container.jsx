import React, { Component, Fragment } from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import ManagementGridComponent from './ManagementGrid.component';
import ManagementGridFormContainer from './ManagementGridForm.container';
import { getManagement } from '../../graphql/queries/manage';

class ManagementGridContainer extends Component {
    state = {
        gridOptions: {
            columnDefs: [
                { headerName: 'Select', checkboxSelection: true, width: 40 },
                { headerName: 'Order ID', field: 'ID', width: 100 },
                { headerName: 'Description', field: 'description', width: 150, editable: true },
                { headerName: 'License Type', field: 'license', width: 150, editable: true },
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
            rowData: [
                { ID: '1', description: 'Java SE', license: 'Processor based', quantity: '1', listFee: '10000', discount: '0.1', netFee: '9000', supportFee: '0', softwareFee: '0', otherFees: '0', CDPackFee: '0', totalFees: '9000' },
                { ID: '2', description: 'Java SE Advanced', license: 'Processor based', quantity: '1', listFee: '12000', discount: '0', netFee: '9000', supportFee: '0', softwareFee: '0', otherFees: '0', CDPackFee: '0', totalFees: '12000' },
            ],
        },
    };

    handleQuery = async e => {
        e.preventDefault();
        const { client } = this.props;
        const data = await client.query({
            query: getManagement,
        })
        console.log(data);
    }

    render() {
        const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
        return (
            <Fragment>
                <ManagementGridComponent
                    columnDefs={columnDefs}
                    rowData={rowData}
                    gridOptions={gridOptions}
                    handleQuery={this.handleQuery}
                />
                <ManagementGridFormContainer/>
            </Fragment>
        );
    }
}


const enhancer = compose(
    withApollo,
    withRouter,
    graphql(`query {getManagement}`),
)

export default enhancer(ManagementGridContainer);
