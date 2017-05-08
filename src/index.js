import React from 'react'
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/index';

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);