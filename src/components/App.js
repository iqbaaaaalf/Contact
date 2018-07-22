import React from 'react';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import Login from './Login.component';
import Contact from '../containers/Contact.container';

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const networkInterface = createNetworkInterface({
  uri: 'http:/localhost:4000/graphql'
});

const client = new ApolloClient({ networkInterface });

export default class App extends React.Component {
  render() {
    return (
        <ApolloProvider store={store} client={client}>
          <RootStack/>
        </ApolloProvider>
    );
  }
}

const RootStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Main: {
    screen: Contact,
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});