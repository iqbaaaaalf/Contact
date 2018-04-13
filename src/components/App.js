import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import Login from './Login';
import MainComponent from './MainComponent';

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
  Main: {
    screen: MainComponent,
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});