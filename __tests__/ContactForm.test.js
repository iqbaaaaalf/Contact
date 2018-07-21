import { shallow } from 'enzyme/build/index';
import React from 'react';
import 'react-dom';
import { TextInput, TouchableHighlight } from 'react-native';
import ContactForm from '../src/components/ContactForm.component';

describe('Filter', () => {
  describe('#_onChangeName', () => {
    it('should change name state if TextInput change', () => {
      const wrapper = shallow(<ContactForm onSubmit={jest.fn()}/>);
      const inputName = wrapper.find(TextInput).first();

      inputName.simulate('ChangeText', 'iqbal');

      expect(wrapper.state('name')).toEqual('iqbal');
    });

    it('should change name state if TextInput change with "Charlotte"', () => {
      const wrapper = shallow(<ContactForm onSubmit={jest.fn()}/>);
      const inputName = wrapper.find(TextInput).first();

      inputName.simulate('ChangeText', 'charlotte');

      expect(wrapper.state('name')).toEqual('charlotte');
    });
  });

  describe('#_onChangeEmail', () => {
    it('should change email state if TextInput change', () => {
      const wrapper = shallow(<ContactForm onSubmit={jest.fn()}/>);
      const inputEmail = wrapper.find(TextInput).at(1);

      inputEmail.simulate('ChangeText', 'charlotte@mail.com');

      expect(wrapper.state('email')).toEqual('charlotte@mail.com');
    });

    it('should change name state if TextInput change with "Charlotte"', () => {
      const wrapper = shallow(<ContactForm onSubmit={jest.fn()}/>);
      const inputEmail = wrapper.find(TextInput).at(1);

      inputEmail.simulate('ChangeText', 'charlotte');

      expect(wrapper.state('email')).toEqual('charlotte');
    });
  });

  describe('#_onSubmit', () => {
    it('should call callback after press button', () => {
      const submitCallback = jest.fn();
      const wrapper = shallow(<ContactForm onSubmit={submitCallback}/>);
      const data = { name: 'iqbal', email: 'charlotte@gmail.com' };
      const buttonAdd = wrapper.find(TouchableHighlight);
      wrapper.setState(data);

      buttonAdd.props().onPress();

      expect(submitCallback).toHaveBeenCalledTimes(1);
      expect(submitCallback).toHaveBeenCalledWith(data);
    });

    it('should call callback after press button with data from state', () => {
      const submitCallback = jest.fn();
      const wrapper = shallow(<ContactForm onSubmit={submitCallback}/>);
      const data = { name: 'charlotte', email: 'aika@mail.com' };
      const buttonAdd = wrapper.find(TouchableHighlight);
      wrapper.setState(data);

      buttonAdd.props().onPress();

      expect(submitCallback).toHaveBeenCalledTimes(1);
      expect(submitCallback).toHaveBeenCalledWith(data);
    });
  });

});