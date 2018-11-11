import React, { Component } from 'react';
import { withApollo, compose } from 'react-apollo';
import axios, { post } from 'axios';
// import { singleUpload } from '../../graphql/mutations/uploads';

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = { file: null };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    // onFormSubmit({ preventDefault }) {
    //     const { file } = this.state;
    //     preventDefault();
    //     this.fileUpload(file).then(response => console.log(response.data));
    // }

    onChange(e) {
        this.setState({ file: e.target.files[0] });
        e.preventDefault();
        this.fileUpload(e.target.files[0]).then(response => console.log(response.data));
    }

    // fileUpload(file) {
    //     const url = 'http://localhost:4000/upload';
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     const token = sessionStorage.getItem('authToken');
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data',
    //             authorization: token,
    //             'Access-Control-Allow-Origin': '*',
    //         },
    //     };
    //     return post(url, formData, config);
    // }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    {/* <input ref={(ref) => { this.uploadInput = ref; }} type="file" accept=".csv" /> */}
                    <input
                        type="file"
                        accept=".csv"
                        required
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        ref={ref => {
                            this.fileName = ref;
                        }}
                        type="text"
                        placeholder="Enter the name of the CSV file"
                    />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        );
    }
}

const enhancer = compose(withApollo);

export default enhancer(Upload);
