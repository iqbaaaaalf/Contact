import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Contact from './Contact.component';

_renderItem = ({ item }) => (
    <Contact
        name={item.name}
        email={item.email}
    />
);

_keyExtractor = (item, index) => index;

const ContactList = ({ data }) => (
    <View style={styles.container}>
      <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ContactList;