import React, { Component } from 'react';

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

    fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body);
        this.setState({ file: `http://localhost:4000/${body.file}`});
      })
    })
  }

  render() {
    return (
      <form>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" accept=".csv" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the name of the CSV file"/>
        </div>
        <div>
          <button>Upload</button>
        </div>
      </form>
    )
  }
}

export default Upload;