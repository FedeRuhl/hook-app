const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    }
];

const todoReducer = (state = initialState, action) => {
    switch(action?.type)
    {
        case 'add':
        {
            // return [...state, action.payload];
            state = [...state, action.payload];
            break;
        }
        default:
        {
            break;
        }
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const action = {
    type: 'add',
    payload: newTodo
};

todos = todoReducer(todos, action);

console.log(todos);