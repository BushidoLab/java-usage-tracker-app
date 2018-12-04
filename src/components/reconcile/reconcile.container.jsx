import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, graphql } from 'react-apollo';
import ReconcileComponent from './reconcile.component';
import { getReconcile } from '../../graphql/queries/reconcile';

class ReconcileContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
          {headerName: "Product Name", field: "productName", width: 220},
          {headerName: "License Type", field: "licenseType", width: 180},
          {headerName: "Version", field: "version", width: 180},
          {headerName: "Licenses Owned", field: "quantity", width: 180},
          {headerName: "Licenses Used", field: "inventory", width: 180},
          {headerName: "Licenses Available", field: "difference", width: 180,
          cellStyle: function(params) {
            if (params.value < 0) {
              return { backgroundColor: '#f66' }
            }}
          },
          {headerName: "Support Date End", field: "supported", width: 180, 
          cellStyle: function(params) {
            if (params.value === "No support" || params.value === "Expired") {
              return { backgroundColor: '#f66' }
            }}
          },
          {headerName: "Compliance Cost", field: "amount", width: 180, valueFormatter: currencyFormatter,
          cellStyle: function(params) {
            if (params.value < 0) {
              return { backgroundColor: '#6dc45e' }
            } else if (params.value > 0) {
              return { backgroundColor: '#f66'}
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

export default enhancer(ReconcileContainer);