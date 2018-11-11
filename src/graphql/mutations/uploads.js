import gql from 'graphql-tag';

export const singleUpload = gql`
    mutation singleUpload(
        $file: Upload!
    ) {
        singleUpload(
            file: $file
        ) {
            path
            filename
            mimetype
            encoding
        }
    }
`;
