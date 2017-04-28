import React from 'react';
import TodoList from './TodoList';

const TodoApp = ({store}) => (
    (
        <div>
            <TodoList store={store} />
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: "test",
                    id: 1
                })
            }}>
                Add to do
            </button>
        </div>
    )
)

export default TodoApp;