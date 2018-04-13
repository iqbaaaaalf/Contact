import { connect } from 'react-redux';
import filterFunction from '../../lib/filterFunction';
import ContactList from '../components/ContactList.component';

const mapStateToProps = state => ({
  data: filterFunction(state.contacts, state.filterKeyword)
});

export default connect(mapStateToProps, null)(ContactList);