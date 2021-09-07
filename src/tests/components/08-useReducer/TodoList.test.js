import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList"
import demoTodos from "../../fixtures/demoTodos";

describe('TodoList tests', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos = { demoTodos }
            handleToggle = { handleToggle }
            handleDelete = { handleDelete }
        />
    );

    test('should show the component succesfully', () => {
        expect(wrapper).toMatchSnapshot();  
    });

    test('should has 2 items', () => {
       expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length); 
       expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function)); 
       expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function)); 
    });
    
    
});