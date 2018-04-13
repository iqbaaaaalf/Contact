import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactList from '../containers/ContactList.container';
import rootReducers from '../reducers';
import Login from './Login';

const store = createStore(rootReducers);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <RootStack/>
        </Provider>
    );
  }
}

const RootStack = StackNavigator({
  Login: {
    screen: Login,
  },
  ContactList: {
    screen: ContactList,
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});