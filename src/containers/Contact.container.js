import { connect } from 'react-redux';
import filterFunction from '../../lib/filterFunction';
import contact from '../components/Contact.component';
import { GET_RACING_CONTACT } from './Contact.container.graphql';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

const mapStateToProps = state => ({
  filterKeyword: state.filterKeyword
});

const mapGetRacingContactToProps = ({ownProps, data: {loading, contacts, error}}) => {
  if(!loading || !error){
    return {
      contactData: filterFunction(contacts, ownProps.filterKeyword)
    };
  }

  return {
    contactData: [],
    loading,
    error
  }
};

export default compose(
    connect(mapStateToProps, null),
    graphql(GET_RACING_CONTACT, { props: mapGetRacingContactToProps }),
)(contact);


//export default connect(mapStateToProps, null)(contact);