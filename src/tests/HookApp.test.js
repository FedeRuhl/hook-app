import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../HookApp';

describe('Hook App tests', () => {

    test('should show the componente correctly', () => {
        const wrapper = shallow(<HookApp />);
       expect(wrapper).toMatchSnapshot(); 
    });
    
});