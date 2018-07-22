import { connect } from 'react-redux';
import filterFunction from '../../lib/filterFunction';
import contact from '../components/Contact.component';
import { GET_RACING_CONTACT } from './Contact.container.graphql';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

const mapStateToProps = state => ({
  data: filterFunction(state.contacts, state.filterKeyword)
});

export default compose(
    graphql(GET_RACING_CONTACT)
)(contact);


//export default connect(mapStateToProps, null)(contact);