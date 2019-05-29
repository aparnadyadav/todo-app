import { gql } from 'apollo-boost';

export default gql`
    {
        todos {
            id
            title
        }
    }
`;