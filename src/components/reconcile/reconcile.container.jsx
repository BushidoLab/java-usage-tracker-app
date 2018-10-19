import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ReconcileComponent from './reconcile.component';
// import { getLogCount } from '../../graphql/queries/logs';

class ReconcileContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
          {headerName: "Publisher", field: "publisher"},
          {headerName: "Product Name", field: "productName"},
          {headerName: "License Type", field: "licenseType"},
          {headerName: "Quantity", field: "quantity"},
          {headerName: "Inventory", field: "inventory"},
          {headerName: "Supported", field: "supported"},
          {headerName: "Difference", field: "difference", aggFunc: this.differenceFunction},
          {headerName: "Amount", field: "amount", aggFunc: this.sumFunction, cellStyle: function(params) {
            if (params.value < 0) {
              return {backgroundColor: 'red'}
            } else if (params.value > 0) {
              return {backgroundColor: 'green'}
            }
          }},
      ],
      rowData: [
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
      ],
    },
  }

  // logCount = async e => {
  //   e.preventDefault();
  //   const { client } = this.props;
  //   const data = await client.query({
  //     query: getLogCount,
  //     variables: { channel: "default", chaincode: "end2end-05", chaincodeVer: "v1.0", args: ["oracle"]}
  //   })
  //   console.log(data);
  // }

  differenceFunction = (params) => {
    // const licenses = await client.query({
    //   query: getLogCount,
    //   variables: { args: ["oracle"]}
    // })

    // const management = await client.query({
    //   query: management,
    //   variables: { license, licenseType, quantity, listFee, discount, netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice }
    // })

    // return parseInt(licenses) - parseInt(management.quantity);
  }

  sumFunction = (params) => {
    
  }

  updateData = data => {
    this.setState({rowData: data})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <ReconcileComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
          logCount={this.logCount}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo,
  // graphql(gql`query {getLogCount { channel: "default", chaincode: "end2end-05", chaincodeVer: "v1.0", args: ["oracle"] }}`)
)

export default enhancer(ReconcileContainer);