import { connect } from 'react-redux';
import filterFunction from '../../lib/filterFunction';
import contact from '../components/Contact.component';

const mapStateToProps = state => ({
  data: filterFunction(state.contacts, state.filterKeyword)
});

export default connect(mapStateToProps, null)(contact);