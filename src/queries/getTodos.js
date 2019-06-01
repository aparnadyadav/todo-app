import { gql } from 'apollo-boost';

export default gql`
    {
        todos(order_by: {id: asc}) {
            id
            title
            is_completed
        }
    }
`;