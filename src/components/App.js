import React from 'react';
import { StackNavigator } from 'react-navigation';
import ContactList from './ContactList';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return <RootStack/>;
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