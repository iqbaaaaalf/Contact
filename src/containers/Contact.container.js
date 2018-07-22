import { connect } from 'react-redux';
import filterFunction from '../../lib/filterFunction';
import contact from '../components/Contact.component';
import { GET_RACING_CONTACT } from './Contact.container.graphql';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import get from 'lodash.get';

const mapStateToProps = state => ({
  filterKeyword: state.filterKeyword
});

const mapGetRacingContactToProps = ({data, ownProps}) => {
  let contacts = get(data, 'contacts', []);
  const { loading, error } = data;

  if(!loading){
    return {
      contacts: filterFunction(contacts, ownProps.filterKeyword)
    };
  }

  return {
    contacts,
    loading,
    error
  }
};

export default compose(
    connect(mapStateToProps, null),
    graphql(GET_RACING_CONTACT, { props: mapGetRacingContactToProps }),
)(contact);