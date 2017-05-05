import React from 'react';
import Link from './Link';

class FilterLink extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        const {store} = this.context;
        const props = this.props;
        console.log(props);
        const state = store.getState();

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

FilterLink.contextTypes = {
    store: React.PropTypes.object
}

export default FilterLink;