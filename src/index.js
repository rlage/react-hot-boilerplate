import React from 'react'
import ReactDOM from 'react-dom';
import TodoApp from './Components/TodoApp'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoApp from './reducers/index'

let store = createStore(todoApp);
console.log(store.getState());

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp dispatch={store.dispatch} todos={store.getState().todos} visibilityFilter={store.getState().visibilityFilter}/>
        </Provider>,
        document.getElementById("root")
    );
};

store.subscribe(render);

render();