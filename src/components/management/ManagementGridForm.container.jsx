import React, { Component } from 'react';
import ManagementGridForm from './ManagementGridForm.component';

export default class ManagementGridFormContainer extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <ManagementGridForm />
    )
  }
}