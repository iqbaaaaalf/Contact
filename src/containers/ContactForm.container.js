import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm.component';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({
    type: 'ADD_CONTACT',
    payload: data,
  }),
});

export default connect(null, mapDispatchToProps)(ContactForm);