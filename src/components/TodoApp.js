import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList';

const TodoApp = ({dispatch, state}) => (
    <div>
        <AddTodo onTodoClick={
            () => dispatch({
                type: 'ADD_TODO',
                id: "nextTodoId++",
                text: "text"
            })
        }/>
        <TodoList state={state}/>
    </div>
)

export default TodoApp;