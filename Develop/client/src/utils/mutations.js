import { gql } from '@apollo/client'

export const Login_USER = gql`
mutation login($email: String!, $password) {
    token
    user {
        _id
        username
        }
    }
}`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        token 
        user {
            _id
            username
        }
    }
}`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
            _id
            username
            email
            bookCount
            saveBooks {
                $bookId
                authors
                title
                description
                image
                link
        }
    }
}`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        _id
        username
        email
        bookCount
        saveBooks {
            bookId
            authors
            title
            description
            image
            link
    }
}`;