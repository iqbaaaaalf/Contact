import { connect } from 'react-redux';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
  filterKeyword: state.filterKeyword,
});

const mapDispatchToProps = dispatch => ({
  onChangeText: text => dispatch({
    type: 'SET_FILTER_CONTACT',
    payload: text,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);