import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, graphql } from 'react-apollo';
import ReconcileComponent from './reconcile.component';
import { getReconcile } from '../../graphql/queries/reconcile';

class DeployContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
          {headerName: "Product Name", field: "productName", width: 220},
          {headerName: "License Type", field: "licenseType", width: 220},
          {headerName: "Licenses owned", field: "quantity", width: 220},
          {headerName: "Licenses used", field: "inventory", width: 220},
          {headerName: "Left over licenses", field: "difference", width: 220},
          {headerName: "Support expiry date", field: "supported", width: 220, 
          cellStyle: function(params) {
            if (params.value === "No support" || params.value === "Expired") {
              return { backgroundColor: '#d16262' }
            }}
          },
          {headerName: "Net value", field: "amount", width: 220, valueFormatter: currencyFormatter,
          cellStyle: function(params) {
            if (params.value < 0) {
              return { backgroundColor: '#d16262' }
            } else if (params.value > 0) {
              return { backgroundColor: '#6dc45e'}
            }}
          },
      ],
      overlayLoadingTemplate: '<span>Loading...</span>',
      overlayNoRowsTemplate: '<span>Loading...</span>',
    },
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs } } = this.state;
    const { data: {getReconcile} } = this.props;
    console.log(getReconcile)
    return (
      <div>
        <ReconcileComponent
          columnDefs={columnDefs}
          rowData={getReconcile}
          gridOptions={gridOptions}
        />
      </div>
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
  graphql(getReconcile)
)

export default enhancer(DeployContainer);