import { graphql } from 'react-apollo';
import ContactForm from '../components/ContactForm.component';
import { ADD_NEW_CONTACT } from './ContactForm.container.graphql';
import { GET_RACING_CONTACT } from './Contact.container.graphql';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({
    type: 'ADD_CONTACT',
    payload: data,
  }),
});

const mapAddContactToProps = ({ mutate }) => ({
  addContact: input => mutate({
    variables: { contact: input },
    refetchQueries: [{
      query: GET_RACING_CONTACT
    }]
  })
});

export default graphql(ADD_NEW_CONTACT, {props: mapAddContactToProps})(ContactForm);