import React, { Component, Fragment } from 'react';
import injectSheet from "react-jss";
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import { styles } from './help.styles';

class ContactForm extends Component {
  state ={
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = ({ target: { value, name }}) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.contact}>Contact us</Button>
        <Modal
         open={this.state.open}
         onClose={this.handleClose}
        >
          <Paper className={classes.paper}>
            <Fragment>
              <Input
                type="string"
                name="name"
                placeholder="Name"
                value={this.name}
                onChange={this.handleChange}
                className={classes.textField}
                variant="outlined"
                required
              />
              <Input
                type="string"
                name="email"
                placeholder="Email"
                value={this.email}
                onChange={this.handleChange}
                className={classes.textField}
                variant="outlined"
                required
              />
              <Input
                type="string"
                name="content"
                placeholder="Content"
                value={this.content}
                onChange={this.handleChange}
                className={classes.textField}
                variant="outlined"
                required
              />
              
            </Fragment>
          </Paper>

        </Modal>
      </div>
    )
  }
}

export default injectSheet(styles)(ContactForm);