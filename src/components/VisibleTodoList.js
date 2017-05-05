import React from 'react';
import TodoList from './TodoList';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() =>
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
        const props = this.props;
        console.log(props);
        const state = props.store.getState();

        return(
            <TodoList todos={this.getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={
                id => props.store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}>
                {props.children}
            </TodoList>
        );
    }
}

export default VisibleTodoList;