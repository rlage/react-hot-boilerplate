import React from 'react';

const AddTodo = ({onTodoClick}) => {
    return (
        (
            <button onClick={() => onTodoClick()}>
                Add todo
            </button>
        )
    )
}

export default AddTodo;