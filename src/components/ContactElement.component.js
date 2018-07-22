import md5 from 'md5';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { pure } from 'recompose';

const Contact = ({ name, email, score}) => {
  return (
      <View style={styles.container}>
        <Image
            style={styles.box}
            source={{ uri: `https://gravatar.com/avatar/${md5(email)}.png?s=50` }}
        />
        <View style={styles.info}>
          <Text style={{ fontSize: 16 }}>{name}</Text>
          <Text style={{ fontSize: 16 }}>{email}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>
  );
};

export default pure(Contact);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    margin: 5,
    flexDirection: 'column',
  },
  box: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    fontSize: 24,
    color: '#499b91'
  }
});

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};