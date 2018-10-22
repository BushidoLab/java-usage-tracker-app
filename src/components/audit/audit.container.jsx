import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import AuditComponent from './audit.component';
import { compose, withApollo, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { getAllLogs } from '../../graphql/queries/logs';

class AuditContainer extends Component {
  state = {
    open: false,
    gridOptions: {
      columnDefs: [
        {headerName: "Details", checkboxSelection: true, width: 30 },
        {headerName: "Device", children: [
          {headerName: "Device Name", field: "deviceName"},
          {headerName: "IP", field: "IP"},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", field: "processor"},
          {headerName: "Cores", field: "cores"},
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", field: "publisher"},
          {headerName: "Category", field: "category"},
          {headerName: "Product", field: "product"},
        ]},
        {headerName: "Usage", children: [
          {headerName: "App Name", field: "appName"},
          {headerName: "User Count", field: "userCount"},
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", field: "operatingSystem"},
          {headerName: "Virtual Machine", field: "virtualMachine"},
        ]}
      ],
      rowData: [
        // { id: 1, deviceName: "Server 1", IP: "192.168.0.1", processor: "Intel i7-8700k", cores: "6", publisher: "Intel", category: "Processor", product: "Java SE Advanced", appName: "JDK", userCount: "88", operatingSystem: "Windows", virtualMachine: null },
        // { id: 2, deviceName: "Server 2", IP: "192.155.0.0", processor: "Intel i7-6700", cores: "4", publisher: "Intel", category: "Processor", product: "Java SE Advanced", appName: "JDK", userCount: "88", operatingSystem: "Windows", virtualMachine: "VMWare" },
      ],
      onRowDoubleClicked: function() {
        console.log(this.rowData);
      },
    },
  };

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <Query
         query={getAllLogs}
         variables={{channel: 'default', chaincode: 'end2end-05', chaincodeVer: '1.0', args: ["oracle"]}}
         >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error.message}`;
            console.log(data.getAllLogs)
            return (
              Object.values(data.getAllLogs)
            )
          }}
        </Query>
        <AuditComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo
)

export default enhancer(AuditContainer);