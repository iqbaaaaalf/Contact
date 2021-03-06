import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactList from '../components/ContactList.component';
import Filter from '../containers/Filter.container';
import ContactForm from '../containers/ContactForm.container';

const ContactComponent = ({ data }) => (
    <View style={styles.container}>
      <Filter />
      <ContactList data={data} />
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

export default ContactComponent;