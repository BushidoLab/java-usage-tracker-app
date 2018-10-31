import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import injectSheet from "react-jss";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import { styles } from './upload.styles';
import { uploadFile } from '../../graphql/mutations/manage';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      open: false,
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
            <form>
              <div>
                <Mutation mutation={uploadFile}>
                  {uploadFile => (
                    <Input
                      color="primary"
                      variant="contained"
                      type="file"
                      accept="*.csv"
                      required
                      onChange={({ target: { validity, files: [file] } }) => {
                        validity.valid && uploadFile({ variables: { file } });
                      }}
                    />
                  )}
                </Mutation>
                <Button className={classes.upload} color="primary" variant="contained">Upload</Button>
              </div>
            </form>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default injectSheet(styles)(Upload);