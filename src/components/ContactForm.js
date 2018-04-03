import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
  }

  _onChangeName(text) {
    this.setState({
      name: text,
    });
  }

  _onChangeEmail(text) {
    this.setState({
      email: text,
    });
  }

  _onSubmit() {
    const data = {
      name: this.state.name,
      email: this.state.email,
    };

    this.setState({
      name: '',
      email: '',
    });

    this.props.onSubmit(data);
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={this._onChangeName.bind(this)}
                placeholder="Name"/>
            <TextInput
                style={styles.input}
                onChangeText={this._onChangeEmail.bind(this)}
                placeholder="Email"/>
          </View>
          <TouchableHighlight onPress={this._onSubmit.bind(this)}>
            <Image
                style={styles.button}
                source={require('../assets/add-button.png')}
            />
          </TouchableHighlight>
        </View>
    );
  }
}

//ContactForm.propTypes = {
//  onSubmit: PropTypes.func().isRequired,
//}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#4DB6AC',
  },
  inputContainer: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    flex: 1,
  },
});