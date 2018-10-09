import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Audit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {headerName: "Device Name", label: "deviceName"},
        {headerName: "IP", label: "IP"},
        {headerName: "Processor", label: "processor"},
        {headerName: "Cores", label: "cores"},
        {headerName: "Publisher", label: "publisher"},
        {headerName: "Category", label: "category"},
        {headerName: "Product", label: "product"},
        {headerName: "App Name", label: "appName"},
        {headerName: "User Count", label: "userCount"},
        {headerName: "Operating System", label: "operatingSystem"},
        {headerName: "Virtual Machine", label: "virtualMachine"},
      ],
      rowData: [
        {},
        {},
        {}
      ]
    }
  }

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '300px', 
        width: '98%',
        margin: '0 1%'
      }} 
      >
          <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
          </AgGridReact>
      </div>
      );
  }
}

export default Audit;