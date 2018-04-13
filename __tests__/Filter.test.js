import { shallow } from 'enzyme/build/index';
import React from 'react';
import 'react-dom';
import { TextInput, TouchableHighlight } from 'react-native';
import FilterInput from '../src/components/Filter.component';

describe('Filter', () => {
  describe('#_onChangeQuery', () => {
    it('should change query state if TextInput change', () => {
      const wrapper = shallow(<FilterInput onSubmit={jest.fn()}/>);
      const inputFilter = wrapper.find(TextInput);
      inputFilter.simulate('ChangeText', 'suka');

      expect(wrapper.state('query')).toEqual('suka');
    });

    it('should change query state if TextInput change to "suki"', () => {
      const wrapper = shallow(<FilterInput onSubmit={jest.fn()}/>);
      const inputFilter = wrapper.find(TextInput);
      inputFilter.simulate('ChangeText', 'suki');

      expect(wrapper.state('query')).toEqual('suki');
    });
  });

  describe('#_onSubmit', () => {
    it('should call callback after press button', () => {
      const filterCallback = jest.fn();
      const wrapper = shallow(<FilterInput onSubmit={filterCallback}/>);
      const buttonFilter = wrapper.find(TouchableHighlight);
      wrapper.setState({query: 'halo'});

      buttonFilter.props().onPress();

      expect(filterCallback).toHaveBeenCalledTimes(1);
      expect(filterCallback).toHaveBeenCalledWith('halo');
    });

    it('should call callback after press button with query "suki"', () => {
      const filterCallback = jest.fn();
      const wrapper = shallow(<FilterInput onSubmit={filterCallback}/>);
      const buttonFilter = wrapper.find(TouchableHighlight);
      wrapper.setState({query: 'suki'});

      buttonFilter.props().onPress();

      expect(filterCallback).toHaveBeenCalledTimes(1);
      expect(filterCallback).toHaveBeenCalledWith('suki');
    });
  });
});