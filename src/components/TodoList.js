import React from 'react';
import Todo from './Todo';

const TodoList = ({state}) => {
    return (
        (
            <ul>
                {
                    state.todos.map(todo =>{
                    return <Todo text={todo.text}/>
                }
                )}
            </ul>
        )
    )
}

export default TodoList;