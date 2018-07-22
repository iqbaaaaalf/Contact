import { mount, shallow } from 'enzyme/build/index';
import React from 'react';
import 'react-dom';
import { TouchableHighlight } from 'react-native';
import ContactForm from '../src/components/ContactForm.component';
import ContactList from '../src/components/ContactList.component';
import Filter from '../src/components/Filter.component';

describe('ContactList', () => {
  it('should contain "Chetan" in list', () => {
    const wrapper = mount(<ContactList/>);
    const textElement = wrapper.find('Text');

    expect(textElement.contains('Chetan')).toEqual(true);
  });

  describe('#_submitForm', () => {
    it('should update data array with new data', () => {
      const data = {
        name: 'iqbal',
        email: 'charlotte@gmail.com',
      };
      const contactListWrapper = shallow(<ContactList/>);
      const formElement = contactListWrapper.find(ContactForm).dive();
      const button = formElement.find(TouchableHighlight);

      formElement.setState(data);
      button.props().onPress();

      expect(contactListWrapper.state('data')).toEqual(expect.arrayContaining([data]));
    });
  });

  describe('#_submitFilter', () => {
    it('should change query state to whatever user input in filter', () => {
      const query = 'apa';
      const contactListWrapper = shallow(<ContactList/>);
      const filterElement = contactListWrapper.find(Filter).dive();
      const button = filterElement.find(TouchableHighlight);

      filterElement.setState({query: query});
      button.props().onPress();

      expect(contactListWrapper.state('query')).toEqual('apa');
    });
  });
});