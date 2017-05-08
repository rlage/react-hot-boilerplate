import React from 'react';
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default TodoApp;