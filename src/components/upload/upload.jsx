import React, { Component } from 'react';
import { uploadFile } from '../../graphql/mutations/manage';
import { Mutation } from 'react-apollo';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

  }

  render() {
    return (
      <form>
        <div>
          <Mutation mutation={uploadFile}>
            {uploadFile => (
              <input
                type="file"
                accept=".csv"
                required
                onChange={({ target: { validity, files: [file] } }) => {
                  validity.valid && uploadFile({ variables: { file } });
                }}
              />
            )}

          </Mutation>
          <button>Upload</button>
        </div>
      </form>
    )
  }
}

export default Upload;