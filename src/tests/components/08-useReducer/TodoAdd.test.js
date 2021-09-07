import { shallow } from "enzyme";
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('TodoAdd tests', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    );

    test('should show the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        // formSubmit({
        //     preventDefault: function(){}
        // });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('should call handleAddTodo', () => {

        const value = 'Study';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });    
    
});