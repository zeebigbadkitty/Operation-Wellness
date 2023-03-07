import { gql } from '@apollo/client';


export const ADD_SAVED_DRUGS = gql`
    mutation addSavedDrugs($drugs: [ID]!){
        addSavedDrugs(drugs: $drugs) {
            _id
            savedDrugs{
                _id
                productndc
                producttypename
                active_numerator_strength
                active_ingred_unit
                
            }
        }
    }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        savedDrugs {
          _id
          productndc
          producttypename
          active_numerator_strength
          active_ingred_unit
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
  `;


export const LOGOUT_MUTATION = gql`
  mutation {
    logout
  }
`;

