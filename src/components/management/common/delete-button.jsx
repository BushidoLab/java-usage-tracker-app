import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import injectSheet from "react-jss";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { styles } from '../ManagementGrid.styles';
import { deleteManagement } from '../../../graphql/mutations/manage';

class Delete extends Component {
  state = {
    deleteModal: false,
    id: String(),
  }

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }

  handleDelete = async e => {
    const { id } = this.state;
    const { client } = this.props;

    await client.mutate({
      mutation: deleteManagement,
      variables: { id }
    })
    this.setState({ deleteModal: false })
  }

  handleDeleteModal = () => {
    this.setState({deleteModal: true})
  }

  handleDeleteModalClose = () => {
    this.setState({deleteModal: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleDeleteModal} color="primary" variant="contained" className={classes.button}>Delete</Button>
        <Modal
            open={this.state.deleteModal}
            onClose={this.handleDeleteModalClose}
          >
          <div className={classes.deleteContainer}>
            <form onSubmit={this.handleDelete} autoComplete="off" className={classes.deleteContainer}>
              <Paper>
                <Typography variant="h6" className={classes.formHeader}>
                  Enter the Order Id of the form you wish to delete
                </Typography>
                <Input
                  type="string"
                  name="id"
                  placeholder="ID"
                  value={this.id}
                  onChange={this.handleChange}
                  className={classes.textField}
                  variant="outlined"
                  />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onSubmit={this.handleDelete}
                  className={classes.delete}>
                  Delete
                </Button>
              </Paper>
            </form>
          </div>

        </Modal>
      </div>
    )}
}

export default injectSheet(styles)(withApollo(Delete));