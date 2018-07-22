import { gql } from 'react-apollo';

const GET_RACING_CONTACT =  gql`
query getRacingContact {
  contacts{
    name
    email
    typeRacing{
      score
      email
      nationality
    }
  }
}
`;

export { GET_RACING_CONTACT };