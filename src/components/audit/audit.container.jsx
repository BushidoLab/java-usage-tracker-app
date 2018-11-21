import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import AuditComponent from './audit.component';
import { getAllLogs } from '../../graphql/queries/logs';

class AuditContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
        {headerName: "", field: "select", checkboxSelection: true, width: 30 },
        {headerName: "Device", children: [
          {headerName: "Device Name", field: "deviceName", width: 130},
          {headerName: "IP", field: "IP", width: 130},
          {headerName: "MAC Address", field: "MAC", width: 130},
          {headername: "Server Model", field: "subVendor", width: 130},
          {headerName: "Server Name", field: "serverName", width: 130},
          {headerName: "Standby Server Name", field: "standbyServer", width: 130},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", field: "model", width: 130},
          {headerName: "Cores", field: "cores", width: 80},
        ]},
        {headerName: "Usage", children: [
          {headerName: "Instance Name", field: "appName", width: 130},
          {headerName: "Users", field: "userCount", width: 80},
          {headerName: "Last Used", field: "dateTime", width: 130},
          {headerName: "Options Used", field: "optionsUsed", width: 80},
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", field: "vendor", width: 130},
          {headerName: "Category", field: "category", width: 130},
          {headerName: "Product", field: "product", width: 80},
          {headerName: "Version", field: "version", width: 130}
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", field: "operatingSystem", width: 150},
          {headerName: "Virtual Machine", field: "virtualMachine", width: 130},
        ]},
      ],
      overlayLoadingTemplate: '<span>Loading...</span>',
      logModalOpen: false,
      modalData: {},
    },
  };

  handleModalClose = () => this.setState({ logModalOpen: false })

  handleRowDoubleClick = ({ data }) => {
    this.setState({ 
      logModalOpen: true,
      modalData: data,
    })
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs }, logModalOpen, modalData } = this.state;
    const { data: { getAllLogs }} = this.props;
    
    return (
      <div>
        <AuditComponent
        columnDefs={columnDefs}
        rowData={getAllLogs}
        gridOptions={gridOptions}
        onRowDoubleClicked={this.handleRowDoubleClick}
        logModalOpen={logModalOpen}
        handleModalClose={this.handleModalClose}
        modalData={modalData}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo,
  withRouter,
  graphql(getAllLogs),
)

export default enhancer(AuditContainer);