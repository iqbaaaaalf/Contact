import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import constant from '../constant';
import { pure } from 'recompose';

const Contact = ({ name, email, score, nationality}) => {
  const imageLocation = constant.images[nationality];

  return (
      <View style={styles.container}>
        <Image
            style={styles.box}
            source={imageLocation}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>{name}</Text>
          <Text style={styles.infoText}>{email}</Text>
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
    alignItems: 'center'
  },
  box: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 16
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