import { combineReducers } from 'redux'
import contacts from './contacts.reducers'
import filterKeyword from './filterKeyword.reducers'

export default combineReducers({
  contacts,
  filterKeyword,
})