const todo = (todo, action) => {
    switch (action.type){
        case('ADD_TODO'):
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case('TOGGLE_TODO'):
            if (todo.id !== action.id){
                return todo;
            }
            return {...todo,
                completed: !todo.completed
            };
        default:
            return todo;
    }
}
const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
        console.log(state);
        console.log('ADD_TODO');
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
        console.log(state);
        console.log('TOGGLE_TODO');
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

export default todos;