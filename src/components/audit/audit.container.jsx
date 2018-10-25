import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { withRouter } from 'react-router-dom';
import AuditComponent from './audit.component';
import { compose, withApollo, graphql } from 'react-apollo';
import { getAllProcLogs } from '../../graphql/queries/logs';

class AuditContainer extends Component {
  state = {
    open: false,
    gridOptions: {
      columnDefs: [
        {headerName: "", checkboxSelection: true, width: 30 },
        {headerName: "Device", children: [
          {headerName: "Device Name", field: "deviceName", width: 130},
          {headerName: "IP", field: "IP", width: 130},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", field: "model", width: 130},
          {headerName: "Cores", field: "cores", width: 80},
        ]},
        {headerName: "Usage", children: [
          {headerName: "App Name", field: "appName", width: 130},
          {headerName: "Users", field: "userCount", width: 80},
          {headerName: "Last used", field: "dateTime", width: 130}
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", field: "vendor", width: 130},
          {headerName: "Category", field: "category", width: 130},
          {headerName: "Product", field: "product", width: 80},
          {headerName: "Version", field: "version", width: 130}
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", field: "operatingSystem", width: 150},
          // {headerName: "Virtual Machine", field: "virtualMachine", width: 130},
        ]},
      ],
      rowData: []
    },
  };

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs } } = this.state;
    const { data: { getAllProcLogs }} = this.props;
    return (
      <div>
        <AuditComponent
        columnDefs={columnDefs}
        rowData={getAllProcLogs}
        gridOptions={gridOptions}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo,
  withRouter,
  graphql(getAllProcLogs),
)

export default enhancer(AuditContainer);