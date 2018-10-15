import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import ReconcileComponent from './reconcile.component';

class ReconcileContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [

          {headerName: "Publisher", label: "publisher"},
          {headerName: "Product Name", label: "productName"},
          {headerName: "License Type", label: "licenseType"},
          {headerName: "Quantity", label: "quantity"},
          {headerName: "Inventory", label: "inventory"},
          {headerName: "Supported", label: "supported"},
          {headerName: "Difference", label: "difference"},
          {headerName: "Amount", label: "amount"},
      ],
      rowData: [
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
      ],
    },
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <ReconcileComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
        />
      </div>
      );
  }
}

export default ReconcileContainer;