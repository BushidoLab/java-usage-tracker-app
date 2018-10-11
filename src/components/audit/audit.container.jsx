import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import AuditComponent from './audit.component';

class AuditContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
        {headerName: "Device", children: [
          {headerName: "Device Name", label: "deviceName"},
          {headerName: "IP", label: "IP"},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", label: "processor"},
          {headerName: "Cores", label: "cores"},
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", label: "publisher"},
          {headerName: "Category", label: "category"},
          {headerName: "Product", label: "product"},
        ]},
        {headerName: "Usage", children: [
          {headerName: "App Name", label: "appName"},
          {headerName: "User Count", label: "userCount"},
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", label: "operatingSystem"},
          {headerName: "Virtual Machine", label: "virtualMachine"},
        ]}
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
        <AuditComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
        />
      </div>
      );
  }
}

export default AuditContainer;