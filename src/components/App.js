import React from 'react'
import TodoApp from './TodoApp'
import { createStore } from 'redux';
import todos from '../reducers'

const store = createStore(todos);
console.log(store.getState());

const App = ({store}) => (
    <TodoApp store={store}/>
)

export default App;