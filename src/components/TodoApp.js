import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = ({store, dispatch, todos, visibilityFilter}) => (
    <div>
        <AddTodo store={store}/>
        <VisibleTodoList store={store}/>
        <Footer store={store}/>
    </div>
)

export default TodoApp;