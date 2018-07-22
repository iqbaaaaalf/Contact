import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactList from '../components/ContactList.component';
import Filter from '../containers/Filter.container';
import ContactForm from '../containers/ContactForm.container';
import Loading from './Loading.component';

const ContactComponent = ({ data: { loading, contacts } }) => {
  if(loading) {
    return (
        <Loading/>
    )
  }

  return (
    <View style={styles.container}>
      <Filter />
      <ContactList data={contacts} />
      <ContactForm />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ContactComponent;