import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import demoTodos from "../../fixtures/demoTodos";
import { act } from '@testing-library/react';

describe('TodoApp tests', () => {

    Storage.prototype.setItem = jest.fn(() => {});

    test('should show the component successfully', () => {
        const wrapper = shallow(<TodoApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should add two items', () => {
       const wrapper = mount(<TodoApp />); //we use mount bc it integrates all of his chilldren and bc we use local storage.

       act( () => {
           wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
           wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
       });
       
       expect(wrapper.find('h1').first().text().trim()).toBe('ToDo App (2)');
       expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete an item', () => {
        const wrapper = shallow(<TodoApp />);

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        expect(wrapper.find('h1').first().text().trim()).toBe('ToDo App (1)');

        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').first().text().trim()).toBe('ToDo App (0)');
    });
    
});