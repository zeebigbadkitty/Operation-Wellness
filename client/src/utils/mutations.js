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

