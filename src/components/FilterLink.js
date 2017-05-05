import React from 'react';
import Link from './Link';

class FilterLink extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        console.log(props);
        const state = props.store.getState();

        return(
            <Link active={props.filter === state.visibilityFilter} onClick={() =>
                props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })
            }>
                {props.children}
            </Link>
        );
    }
}

export default FilterLink;