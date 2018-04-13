import React, { Component } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';
import filterFunction from '../../lib/filterFunction';
import DummyData from '../data/DummyData';
import Contact from './Contact';
import ContactForm from './ContactForm';
import Filter from './Filter';

type Props = {};
export default class ContactList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: DummyData.GENERATE(),
    });
  }

  _renderItem = ({ item }) => (
      <Contact
          name={item.name}
          email={item.email}
      />
  );

  _keyExtractor = (item, index) => index;

  _SubmitFilter(query) {
    this.setState({ query: query });
  };

  _submitForm({ name, email }) {
    const newData = {
      name: name,
      email: email,
    };

    this.setState({
      data: [ ...this.state.data, newData ],
    });
  }

  render() {
    const { data, query } = this.state;
    const filteredData = filterFunction(query, data);

    return (
        <View style={styles.container}>
          <Filter onSubmit={this._SubmitFilter.bind(this)}/>
          <FlatList
              style={{ flex: 1 }}
              data={filteredData}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
          />
          <ContactForm onSubmit={this._submitForm.bind(this)}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
