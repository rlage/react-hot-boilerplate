import React from 'react';

const Todo = ({text}) => {
    console.log(text);
    return (
        (
            <li>
                {text}
            </li>
        )
    )
}

export default Todo;