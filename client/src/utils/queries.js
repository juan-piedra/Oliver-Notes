import { gql } from "@apollo/client";

export const QUERY_SCHOOLS = gql`
    {
        schools {
            _id
            schoolName
            classes {
                _id
                className
                notes {
                    _id
                    price
                }
            }
        }
    }
`