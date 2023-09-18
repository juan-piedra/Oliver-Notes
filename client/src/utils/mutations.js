import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                purchasedNotes {
                    _id
                    price
                    pdf
                    comments {
                        _id
                        commentedNotes {
                            _id
                            price
                        }
                        text
                        uploadDate
                        commentedUser {
                            username
                        }
                    }
                    publisher {
                        _id
                    }
                    purchasers {
                        _id
                    }
                    uploadDate
                }
            }
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                purchasedNotes {
                    _id
                    price
                    pdf
                    comments {
                        _id
                        commentedNotes {
                            _id
                            price
                        }
                        text
                        uploadDate
                        commentedUser {
                            username
                        }
                    }
                    publisher {
                        _id
                    }
                    purchasers {
                        _id
                    }
                    uploadDate
                }
            }
        }
    }
`