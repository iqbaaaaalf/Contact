import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from '../components/ContactList.component';
import Filter from '../containers/Filter.container';
import ContactForm from '../containers/ContactForm.container';
import Loading from './Loading.component';

const ContactComponent = ({ contactData, loading, error }) => {
  if(loading) {
    return (
        <Loading/>
    )
  }

  if(error){
    return (
      <View style={styles.error}>
        <Text >Oopsy daisy ... :(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Filter />
      <ContactList data={contactData} />
      <ContactForm />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  error: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ContactComponent;