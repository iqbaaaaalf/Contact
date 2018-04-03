import LottieView from 'lottie-react-native';
import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import winkAnim from '../assets/animations/emoji_wink';
import ContactList from './ContactList';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isCredentialWrong: false,
      errorMessage: {
        ifUsernameEmpty: '',
        ifPasswordEmpty: '',
        ifCredentialWrong: '',
      },
    };

    this.errorMessage = {
      usernameEmptyMessage: 'Please input username',
      passwordEmptyMessage: 'Please input password',
      credentialWrongMessage: 'Invalid username or password',
    };
  }

  componentDidMount() {
    this.animation.play();
  }

  _onChangeUsername(text) {
    this.setState(prevState => ({
      username: text,
      errorMessage: {
        ...prevState.errorMessage,
        ifUsernameEmpty: '',
      },
    }));
  }

  _onChangePassword(text) {
    this.setState(prevState => ({
      password: text,
      errorMessage: {
        ...prevState.errorMessage,
        ifPasswordEmpty: '',
      },
    }));
  }

  _onSubmit() {
    const { username, password } = this.state;

    this._checkIsEmpty(username, password);

    this._checkCredential(username, password);
  }

  _checkCredential(username, password) {
    if ((username === 'Iqbal') && (password === 'Pass')) {
      this.props.navigation.navigate('ContactList');
    } else {
      this.setState(prevState => ({
        errorMessage: {
          ...prevState.errorMessage,
          ifCredentialWrong: this.errorMessage.credentialWrongMessage,
        },
      }));
    }
  }

  _checkIsEmpty(username, password) {
    if (username === '') {
      this.setState(prevState => ({
        errorMessage: {
          ...prevState.errorMessage,
          ifUsernameEmpty: this.errorMessage.usernameEmptyMessage,
        },
      }));
    }

    if (password === '') {
      this.setState(prevState => ({
        errorMessage: {
          ...prevState.errorMessage,
          ifPasswordEmpty: this.errorMessage.passwordEmptyMessage,
        },
      }));
    }
  }

  render() {
    const {errorMessage } = this.state;

    return (
        <View style={styles.container}>
          <StatusBar
              barStyle="dark-content"
              backgroundColor="#4DB6AC"
          />
          <View style={styles.animation}>
            <LottieView
                ref={animation => {
                  this.animation = animation;
                }}
                style={{ width: 100, height: 100 }}
                loop={true}
                source={winkAnim}
            />
          </View>
          <Text style={styles.header}>
            Contact
          </Text>
          <Text style={styles.error}>{errorMessage.ifCredentialWrong}</Text>
          <TextInput
              style={styles.input}
              onChangeText={this._onChangeUsername.bind(this)}
              placeholder="Username"/>
          <Text style={styles.error}>{errorMessage.ifUsernameEmpty}</Text>
          <TextInput
              style={styles.input} onChangeText={this._onChangePassword.bind(this)}
              placeholder="Password" secureTextEntry={true}/>
          <Text style={styles.error}>{errorMessage.ifPasswordEmpty}</Text>
          <TouchableHighlight onPress={this._onSubmit.bind(this)}>
            <Text style={styles.loginButton}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4DB6AC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#c2d5d6',
    padding: 5,
    width: 125,
    margin: 10,
    backgroundColor: '#499b91',
    borderRadius: 5,
  },
  loginButton: {
    margin: 10,
    fontSize: 20,
    color: '#c2d5d6',
  },
  error: {
    color: '#b67b86',
    width: 125,
    fontSize: 11,
    fontWeight: 'bold',
  },
  header: {
    color: '#c2d5d6',
    fontWeight: 'bold',
    fontSize: 40,
    margin: 20,
  },
});