import React from 'react';
import { View } from 'react-native'
import ContactList from '../containers/ContactList.container';
import Filter from '../containers/Filter.container';

const MainComponent = () => (
    <View>
      <Filter />
      <ContactList />
    </View>
);

export default MainComponent;