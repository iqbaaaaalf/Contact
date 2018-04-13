import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactList from '../containers/ContactList.container';
import Filter from '../containers/Filter.container';
import ContactForm from '../containers/ContactForm.container';

const MainComponent = () => (
    <View style={styles.container}>
      <Filter />
      <ContactList />
      <ContactForm />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MainComponent;