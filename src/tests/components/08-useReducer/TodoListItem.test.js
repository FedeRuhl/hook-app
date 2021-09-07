import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import demoTodos from "../../fixtures/demoTodos";

describe('TodoListItem tests', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
    <TodoListItem
        todo={demoTodos[0]}
        i={0}
        handleToggle={ handleToggle}
        handleDelete={ handleDelete }
    />
    );

    test('should return TodoListItem successfull', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call delete function', () => {
        
        wrapper.find('button').first().simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should call toggle function', () => {
        wrapper.find('p').first().simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('should show text paragraph correctly', () => {
        const p = wrapper.find('p').first().text();
        expect(p).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('should has complete class if done is true', () => {
        const todo={
            'id': 1,
            'desc': 'learn to play the piano',
            'done': true
        };

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                i={0}
                handleToggle={ handleToggle}
                handleDelete={ handleDelete }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
    
});