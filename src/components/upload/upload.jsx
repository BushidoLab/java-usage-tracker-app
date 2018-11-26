import React, { Component } from 'react';
import injectSheet from "react-jss";
import { withApollo, compose } from 'react-apollo';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { styles } from './upload.styles';
import { post } from 'axios';

class Upload extends Component {
    constructor(props) {
        super(props);

    this.state = { file: null };

    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
}

  onChange(e) {
      this.setState({ file: e.target.files[0] });
      e.preventDefault();
      this.fileUpload(e.target.files[0]).then(response => console.log(response.data));
  }

  fileUpload(file) {
      const url = 'http://localhost:4000/upload';
      const formData = new FormData();
      formData.append('file', file);
      const token = sessionStorage.getItem('authToken');
      const config = {
          headers: {
              'content-type': 'multipart/form-data',
              authorization: token,
              'Access-Control-Allow-Origin': '*',
          },
      };
      return post(url, formData, config);
  }

  handleChange = (e) => {
    this.setState({ file: e.target.value });
    console.log(this.state.file);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
    e.preventDefault();
    this.fileUpload(e.target.files[0]).then(response => console.log(response.data));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen} color="primary" variant="contained" className={classes.button}>Import CSV</Button>
        
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.header}>Upload your CSV file</Typography>
            <form onSubmit={this.onFormSubmit}>
              <div>
                  <div>
                    <input
                      name="file"
                      color="primary"
                      variant="contained"
                      type="file"
                      accept=".csv"
                      required
                      className={classes.input}
                      onChange={this.onChange}
                    />
                  </div>
                <Button className={classes.upload} color="primary" variant="contained" type="submit">Upload</Button>
              </div>
            </form>
          </Paper>
        </Modal>
      </div>
        );
    }
}

const enhancer = compose(withApollo);

export default enhancer(Upload);
