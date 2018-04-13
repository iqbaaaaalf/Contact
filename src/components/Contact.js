import md5 from 'md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={{ uri: `https://gravatar.com/avatar/${md5(this.props.email)}.png?s=50` }}
          />
          <View style={styles.info}>
            <Text style={{ fontSize: 16 }}>{this.props.name}</Text>
            <Text style={{ fontSize: 16 }}>{this.props.email}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  info: {
    margin: 5,
    flexDirection: 'column',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
  },
});

ContactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};