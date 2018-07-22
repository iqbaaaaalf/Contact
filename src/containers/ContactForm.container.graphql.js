import { gql } from 'react-apollo';

const ADD_NEW_CONTACT =  gql`
mutation addNewContact($contact: CreateContactInput!){
  createContact(input: $contact){
    name
    email
    phone
    photo
  }
}
`;

export { ADD_NEW_CONTACT };