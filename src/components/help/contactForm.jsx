import React, { Component } from 'react';
import injectSheet from "react-jss";
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as emailjs from "emailjs-com";
import { styles } from './help.styles';
require('dotenv').config();

class ContactForm extends Component {
  state ={
    open: false,
    name: null,
    email: null,
    feedback: null,
    formSubmitted: false
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, feedback } = this.state;

    const templateParams = {
      name,
      feedback,
      email,
      date: new Date(Date.now())
    }
    emailjs.init('user_sRWdFbSeea1KuySISxsua');

    emailjs.send('gmail', 'contact_form', templateParams)
      .then(res => {
        console.log('Successfully sent contact email', res.status, res.text);
        alert('Email sent successfully');
      }, err => {
        console.log('Failed to send contact email', err);
      });

    this.handleClose();
  }
  
  // sendFeedback = (templateId, senderEmail, receiverEmail, feedback) => {
  //   emailjs.send(
  //     'gmail',
  //     templateId,
  //     process.env.EMAILJS_USERID,
  //     {
  //       senderEmail,
  //       receiverEmail,
  //       feedback
  //     }
  //   )
  //     .then(res => {
  //       this.setState({ formEmailSent: true });
  //     })
  //     .catch(err => {
  //       console.error('There was a problem sending feedback: ', err);
  //     })
  // }

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
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <Typography variant="h5" className={classes.formHeader}>Send us an email</Typography>
              <TextField
                type="string"
                name="name"
                placeholder="Name"
                value={this.name}
                onChange={this.handleChange}
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                type="email"
                name="email"
                placeholder="Email"
                value={this.email}
                onChange={this.handleChange}
                className={classes.textField}
                autoComplete="email"
                variant="outlined"
                required
              />
              <TextField
                type="string"
                name="feedback"
                multiline
                value={this.feedback}
                placeholder="Enter your feedback here"
                onChange={this.handleChange}
                className={classes.feedback}
                variant="outlined"
                required
              />
              <div className={classes.buttonGroup}>
                <Button className={classes.send} type="submit" color="primary">Send</Button>
                <Button className={classes.cancel} onClick={this.handleClose} color="secondary">Cancel</Button>
              </div>
            </form>
          </Paper>

        </Modal>
      </div>
    )
  }
}

export default injectSheet(styles)(ContactForm);