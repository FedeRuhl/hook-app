import todoReducer from "../../../components/08-useReducer/todoReducer";
import demoTodos from "../../fixtures/demoTodos";

describe('todoReducer tests', () => {

    test('should return default state', () => {
       const state = todoReducer(demoTodos, {});
       expect(state).toEqual(demoTodos);
    });

    test('should add an item', () => {
        const newItem = {
            'id': 3,
            'desc': 'learn node.js',
            'done': false
        };
        const state = todoReducer(demoTodos, {
            'type': 'add',
            'payload': newItem
        });

        expect(state.length).toBe(demoTodos.length + 1);
        expect(state).toEqual([...demoTodos, newItem]);
    });

    test('should delete an item', () => {
        const payload = 2;
        const state = todoReducer(demoTodos, {
            'type': 'delete',
            'payload': payload
        });

        expect(state.length).toBe(demoTodos.length - 1);
        expect(state).toEqual(demoTodos.filter(item => item.id !== payload));
    });

    test('should toggle an item', () => {
        const payload = 2;
        const state = todoReducer(demoTodos, {
            'type': 'toggle',
            'payload': payload
        });

        const doneBefore = demoTodos.find(item => item.id === payload).done;

        expect(state.length).toBe(demoTodos.length);
        expect(state.find(item => item.id === payload).done).toBe(!doneBefore);
    });
    

});