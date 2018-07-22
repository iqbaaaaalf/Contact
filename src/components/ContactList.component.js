import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Contact from './ContactElement.component';
import get from 'lodash.get';

_renderItem = ({ item }) => {
  const { name, email, typeRacing } = item;
  const score =  get(typeRacing, 'score', 0);

  return(
    <Contact
        name={name}
        email={email}
        score={score}
    />
)};

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