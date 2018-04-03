import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  _onChangeInput(text) {
    this.setState({
      query: text,
    });
  }

  _onSubmit() {
    const { query } = this.state;
    this.props.onSubmit(query);
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={this._onChangeInput.bind(this)}
                placeholder="Search..."
            />
          </View>
          <TouchableHighlight onPress={this._onSubmit.bind(this)}>
            <Image
                style={styles.button}
                source={require('../assets/search-button.png')}
            />
          </TouchableHighlight>
        </View>
    );
  }
}

//Filter.propTypes = {
//  onSubmit: PropTypes.func().isRequired,
//};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginRight: 10,
    width: 15,
    height: 15,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputContainer: {
    margin: 10,
    flex: 1,
  },
  input: {
    fontSize: 16,
  },
});

