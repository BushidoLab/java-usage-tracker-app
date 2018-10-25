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
          {headerName: "License Type", field: "licenseType", width: 220},
          {headerName: "Quantity", field: "quantity", width: 220},
          {headerName: "Inventory", field: "inventory", width: 220},
          {headerName: "Supported", field: "supported", width: 220},
          {headerName: "Remaining licenses", field: "difference", width: 220},
          {headerName: "Amount owed", field: "amount", width: 220, 
          cellStyle: function(params) {
            if (params.value < 0) {
              return {backgroundColor: '#d16262'}
            } else if (params.value > 0) {
              return {backgroundColor: 'green'}
            }}
          },
      ],
      overlayLoadingTemplate: '<span>Please wait while the data is loading</span>',
      overlayNoRowsTemplate: '<span>Please wait while the data is loading</span>',
      rowData: [],
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
          // overlayLoadingTemplate={this.state.gridOptions.overlayLoadingTemplate}
          // overlayNoRowsTemplate={this.state.gridOptions.overlayNoRowsTemplate}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo,
  graphql(getReconcile)
)

export default enhancer(ReconcileContainer);