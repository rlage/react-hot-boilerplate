import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import Footer from './Footer';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

let nextTodoId = 0;
const TodoApp = ({dispatch, todos, visibilityFilter}) => (
    <div>
        <AddTodo onAddClick={
            (text) => {
                dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text
                });
            }
        }/>
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={
            (id) => {
                dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }
        }/>
        <Footer visibilityFilter={visibilityFilter} onFilterClick={filter => dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })}
        />
    </div>
)

export default TodoApp;