import React from 'react'
import ReactDOM from 'react-dom';
import TodoApp from './Components/TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/index';

Provider.childContextTypes = {
    store: React.PropTypes.object
}

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);