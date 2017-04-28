import React from 'react';
import Todo from './Todo';

const TodoList = ({store}) => {
    return (
        (
            <ul>
                {
                    store.getState().todos.map(todo =>{
                    return <Todo text={todo.text}/>
                }
                )}
            </ul>
        )
    )
}

export default TodoList;