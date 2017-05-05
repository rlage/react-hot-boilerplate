import React from 'react';
import TodoList from './TodoList';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}


    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        const {store} = this.context;
        const state = store.getState();

        return(
            <TodoList todos={this.getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={
                id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}>
                {props.children}
            </TodoList>
        );
    }
}

VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
}

export default VisibleTodoList;