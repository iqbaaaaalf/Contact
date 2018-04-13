import React, { Component } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';
import filterFunction from '../../lib/filterFunction';
import DummyData from '../data/DummyData';
import Contact from './Contact.component';
import ContactForm from './ContactForm.component';
import Filter from './Filter.component';

_renderItem = ({ item }) => (
    <Contact
        name={item.name}
        email={item.email}
    />
);

_keyExtractor = (item, index) => index;

const ContactList = ({ data }) => (
    <View style={styles.container}>
      { console.log(data)}
      <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ContactList;