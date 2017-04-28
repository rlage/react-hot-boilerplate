import React from 'react'
import ReactDOM from 'react-dom';
import TodoApp from './Components/TodoApp'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todos from './reducers'

let store = createStore(todos);
console.log(store);
console.log(store.getState());



const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp dispatch={store.dispatch} state={store.getState()}/>
        </Provider>,
        document.getElementById("root")
    );
};

store.subscribe(render);

render();