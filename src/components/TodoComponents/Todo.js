import React from 'react';

const Todo = props => {
    let verboseClassName = 'item';
    if(props.items.completed) {
        verboseClassName = verboseClassName + 'completed';
    }

    const handleClick = () => {
        props.toggleCompleted(props.items.id);
    };
    console.log(props.toggleCompleted)
    console.log(props.items)
    return (
        <div onClick = {handleClick} className = {verboseClassName}>
            <p> {props.items.task} </p>
        </div>
    )
}

export default Todo;