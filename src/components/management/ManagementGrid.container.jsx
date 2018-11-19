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
                { headerName: 'Order Id', field: '_id', width: 100 },
                { headerName: 'CSI Number', field: 'csi', width: 130 },
                { headerName: 'Description', field: 'license', width: 200 },
                { headerName: 'Vendor Name', field: 'vendor', width: 150 },
                { headerName: 'Vendor Number', field: 'vendorNumber', width: 130 },
                { headerName: 'License Type', field: 'licenseType', width: 150 },
                { headerName: 'Version', field: 'version', width: 110 },
                { headerName: 'Quantity', field: 'quantity', width: 130 },
                { headerName: 'List Fee', field: 'listFee', width: 130, valueFormatter: currencyFormatter },
                { headerName: 'Discount', field: 'discount', width: 130, valueFormatter: currencyFormatter, },
                { headerName: 'Support Fee', field: 'productSupportFee', width: 130, valueFormatter: currencyFormatter },
                { headerName: 'Software Update Fee', field: 'softwareUpdateFee', width: 130, valueFormatter: currencyFormatter },
                { headerName: 'Other Fees', field: 'otherFees', width: 130, valueFormatter: currencyFormatter },
                { headerName: 'CD Pack Fee', field: 'cdPackFee', width: 130, valueFormatter: currencyFormatter },
                { headerName: 'Net Fee', field: 'netFee', width: 130 , valueFormatter: currencyFormatter},
                // Add editable: true when we can manage cells updating
            ],
            overlayLoadingTemplate: '<span>Loading...</span>'
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

function currencyFormatter(params) {
    return "\x24" + formatNumber(params.value);
}
  
function formatNumber(number) {
return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}


const enhancer = compose(
    withApollo,
    withRouter,
    graphql(getManagement)
)

export default enhancer(ManagementGridContainer);
