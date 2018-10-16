import gql from 'graphql-tag';
/** User */
export const login = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const signUp = gql`
    mutation signUp(
        $email: String!,
        $password: String!,
        $firstName: String!,
        $lastName: String!,
    ){
        signUp(
            email: $email,
            password: $password,
            firstName: $firstName,
            lastName: $lastName,
        ) {
            token
        }
    }
`;