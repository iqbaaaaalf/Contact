import { mount } from 'enzyme';
import React from 'react';
import 'react-dom';
import Contact from '../src/components/Contact';

describe('Contact', () => {
  describe('displayName', () => {
    it('display name "iqbal" in name text', () => {
      const wrapper = mount(<Contact name="iqbal" email="mail@gmail.com"/>);
      const nameText = wrapper.find('Text').at(0);
      console.log(nameText);
//      expect(nameText.text()).toEqual('iqbal');
    });

    it('display name "ramzi" in name text', () => {
      const wrapper = mount(<Contact name="ramzi" email="mail@gmail.com"/>);
      const nameText = wrapper.find('Text').at(0);
      expect(nameText.text()).toEqual('ramzi');
    });
  });

  describe('displayEmail', () => {
    it('display email "charlotte@gmail.com" in email text', () => {
      const wrapper = mount(<Contact name="iqbal" email="charlotte@gmail.com"/>);
      const nameText = wrapper.find('Text').at(2);
      expect(nameText.text()).toEqual('charlotte@gmail.com');
    });

    it('display email "rikka@gmail.com" in email text', () => {
      const wrapper = mount(<Contact name="rika" email="rikka@gmail.com"/>);
      const nameText = wrapper.find('Text').at(2);
      expect(nameText.text()).toEqual('rikka@gmail.com');
    });
  });

  describe('displayImage', () => {
    it('display email "charlotte@gmail.com" in email text', () => {
      const wrapper = mount(
          <Contact name="iqbal" email="charlotte@gmail.com"
                   imgUrl="https://media.licdn.com/dms/image/C4D03AQE454mgMzlVuA/profile-displayphoto-shrink_800_800/0?e=1525514400&v=alpha&t=AolL7K1hxSeHq33MHihJ7DO-9OxOfbjzv4b86M1YiAI"
          />);
      const imageElement = wrapper.find('Image').at(1);
      expect(imageElement.length).toEqual(1);
    });
  });
});