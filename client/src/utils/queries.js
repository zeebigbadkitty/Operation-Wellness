import { gql } from "@apollo/client";

export const QUERY_USER_DRUGS = gql`
  query drugs($userId: String) {
    drugs(userId: $uderId) {
      _id
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
      productndc
      producttypename
      active_numerator_strength
      active_ingred_unit
    }
  }
`;
