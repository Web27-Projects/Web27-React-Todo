import React from 'react';
import Todo from './Todo';

const TodoList = props => {
console.log(props.toggleCompleted)
    return(
        <>
        {props.list.map(item => (
            <Todo
                key ={item.id} items = {item} toggleCompleted= {props.toggleCompleted}
            />
        ))}
        <button onClick={props.clearItem}> Clear Completed </button>
        </>
    )
}

export default TodoList;