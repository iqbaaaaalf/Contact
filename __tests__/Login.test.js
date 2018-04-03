import { mount, shallow } from 'enzyme/build/index';
import React from 'react';
import 'react-dom';
import { TextInput, TouchableHighlight, Text } from 'react-native';
import Login from '../src/components/Login';

describe('Login', () => {
  describe('#_onChangeUsername', () => {
    it('should change username state if TextInput change "iqbaaaaalf"', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputUsername = wrapper.find(TextInput).first();

      inputUsername.simulate('ChangeText', 'iqbaaaaalf');

      expect(wrapper.state('username')).toEqual('iqbaaaaalf');
    });

    it('should change username state if TextInput change "ranggaaa"', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputUsername = wrapper.find(TextInput).first();

      inputUsername.simulate('ChangeText', 'ranggaaa');

      expect(wrapper.state('username')).toEqual('ranggaaa');
    });

    it('should change ifUsernameEmpty error massage to empty string if TextInput change', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputUsername = wrapper.find(TextInput).first();

      wrapper.setState({
        isUsernameEmpty: true,
      });
      inputUsername.simulate('ChangeText', 'hola');

      expect(wrapper.state('errorMessage').ifUsernameEmpty).toEqual('');
    });

    it('should change ifCredentialWrong error massage to empty string if TextInput change', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputUsername = wrapper.find(TextInput).first();

      wrapper.setState({
        isCredentialWrong: true,
      });
      inputUsername.simulate('ChangeText', 'hola');

      expect(wrapper.state('errorMessage').ifCredentialWrong).toEqual('');
    });
  });

  describe('#_onChangePassword', () => {
    it('should change password state if TextInput change "charlotte"', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputPassword = wrapper.find(TextInput).at(1);

      inputPassword.simulate('ChangeText', 'charlotte');

      expect(wrapper.state('password')).toEqual('charlotte');
    });

    it('should change password state if TextInput change "lalaen"', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputPassword = wrapper.find(TextInput).at(1);

      inputPassword.simulate('ChangeText', 'lalaen');

      expect(wrapper.state('password')).toEqual('lalaen');
    });

    it('should change ifPasswordEmpty error massage to empty string if TextInput change', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputPassword = wrapper.find(TextInput).at(1);

      wrapper.setState({
        isPasswordEmpty: true,
      });
      inputPassword.simulate('ChangeText', 'pass');

      expect(wrapper.state('errorMessage').ifPasswordEmpty).toEqual('');
    });

    it('should change ifCredentialWrong error massage to empty string if TextInput change', () => {
      const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
      const inputPassword = wrapper.find(TextInput).at(1);

      wrapper.setState({
        isCredentialWrong: true,
      });
      inputPassword.simulate('ChangeText', 'pass');

      expect(wrapper.state('errorMessage').ifCredentialWrong).toEqual('');
    });
  });

  describe('#_onSubmit', () => {
    it('should change ifUsernameEmpty error massage to proper Message if user not provide a username after press button ',
        () => {
          const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
          const data = { username: '', password: 'charlotte' };
          const buttonAdd = wrapper.find(TouchableHighlight);
          wrapper.setState(data);

          buttonAdd.props().onPress();

          expect(wrapper.state('errorMessage').ifUsernameEmpty).toEqual('Please input username');
        });

    it('should change ifPasswordEmpty error massage to proper Message if user not provide a password after press button ',
        () => {
          const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
          const data = { username: 'iqbaaaaalf', password: '' };
          const buttonAdd = wrapper.find(TouchableHighlight);
          wrapper.setState(data);

          buttonAdd.props().onPress();

          expect(wrapper.state('errorMessage').ifPasswordEmpty).toEqual('Please input password');
        });

    it('should change ifCredentialWrong error massage to proper Message if user not "Iqbal" and password not "Pass"',
        () => {
          const wrapper = shallow(<Login onSubmit={jest.fn()}/>);
          const data = { username: 'Iqbal', password: 'notPass' };
          const buttonAdd = wrapper.find(TouchableHighlight);
          wrapper.setState(data);

          buttonAdd.props().onPress();

          expect(wrapper.state('errorMessage').ifCredentialWrong).toEqual('Invalid username or password');
        });

    it('should display message in Text if username is not provide',
        () => {
          const wrapper = mount(<Login onSubmit={jest.fn()}/>);
          const data = { username: '', password: 'charlotte' };
          const buttonAdd = wrapper.find(TouchableHighlight);

          wrapper.setState(data);
          buttonAdd.props().onPress();

          const textElement = wrapper.find(Text).at(2);
          expect(textElement.text()).toEqual('Please input username');
        });

    it('should display message in Text if password is not provide',
        () => {
          const wrapper = mount(<Login onSubmit={jest.fn()}/>);
          const data = { username: 'Charlotte', password: '' };
          const buttonAdd = wrapper.find(TouchableHighlight);

          wrapper.setState(data);
          buttonAdd.props().onPress();

          const textElement = wrapper.find(Text).at(3);
          expect(textElement.text()).toEqual('Please input password');
        });

    it('should call callback of navigation if username and password match',
        () => {
          const loginCallback = jest.fn();
          const mockNavigate = {
            navigate: loginCallback,
          };
          const wrapper = shallow(<Login navigation={mockNavigate}/>);
          const data = { username: 'Iqbal', password: 'Pass' };
          const buttonAdd = wrapper.find(TouchableHighlight);
          wrapper.setState(data);

          buttonAdd.props().onPress();

          expect(loginCallback).toHaveBeenCalledTimes(1);
          expect(loginCallback).toHaveBeenCalledWith('ContactList');
        });

  });

});