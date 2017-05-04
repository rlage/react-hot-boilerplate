import React from 'react';

const FilterLink = ({filter, children, onClick}) => {
    return (
        (
            <a href="#"
                onClick={e => {
                    e.preventDefault();
                    onClick(filter);
                }}>
                {children}
            </a>
        )
    )
}

export default FilterLink;