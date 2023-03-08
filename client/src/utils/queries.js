import { gql } from "@apollo/client";

export const QUERY_USER_DRUGS = gql`
  query drugs($userId: String) {
    drugs(userId: $uderId) {
      _id
      name
      productndc
      producttypename
      active_numerator_strength
      active_ingred_unit
    }
  }
`;

export const QUERY_SINGLE_DRUG = gql`
  query drug($_id: String) {
    drug(_id: $_id) {
      _id
      producttypename
      active_numerator_strength
      active_ingred_unit
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: String) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
    }
  }
`;


export const QUERY_SINGLE_USER_WITH_DRUGS = gql`
query User {
  user {
    _id
    email
    name
    password
    savedDrugs {
      active_numerator_strength
      productndc
      proprietaryname
    }
  }
}
`;