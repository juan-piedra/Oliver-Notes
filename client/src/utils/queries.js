import { gql } from "@apollo/client";

export const QUERY_SCHOOLS = gql`
    {
        schools {
            _id
            schoolName
        }
    }
`
export const QUERY_CLASSES = gql`
query Classes($schoolId: ID!) {
    Classes(SchoolId: $schoolId) {
      _id
      schoolName
      classes {
        _id
        className
      }
    }
  }
`