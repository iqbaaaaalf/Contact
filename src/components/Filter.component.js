import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }

  _onChangeInput(text) {
    const { onChangeText } = this.props;
    onChangeText(text);
  }

  render() {
    const { filterKeyword } = this.props;

    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={this._onChangeInput.bind(this)}
                placeholder="Search..."
                value={filterKeyword}
            />
          </View>
        </View>
    );
  }
}

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

