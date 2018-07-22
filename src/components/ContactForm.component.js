import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';

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

  async _onSubmit() {
    const { addContact } = this.props;

    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: '081804905774',
      photo: 'https://'
    };

    this.setState({
      name: '',
      email: '',
    });

    await addContact(data);
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