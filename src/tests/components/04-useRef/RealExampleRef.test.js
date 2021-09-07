import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';
// import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
// import useFetch from '../../../hooks/useFetch';
// import useCounter from '../../../hooks/useCounter';
// jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');

describe('RealExampleRef tests', () => {
    test('should show the component succesfully', () => {
        const wrapper = shallow(<RealExampleRef />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('should show the component Multiple Custom Hooks', () => {
        const wrapper = shallow(<RealExampleRef />);
        let p = wrapper.find('p').text();
        expect(p).toBe('');
        
        const button = wrapper.find('button');
        button.simulate('click');
        
        p = wrapper.find('p').text();
        expect(p).toBe('<MultipleCustomHooks />');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
});