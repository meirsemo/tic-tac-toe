import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed}) => {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="button-container">
                {todo.isCompleted ? null : 
                <button onClick={() => onCompletedPressed(todo.text)/**4 */} 
                    className="completed-button">Mark As Completed</button> }
                <button className="remove-button"
                        onClick={() => onRemovePressed(todo.text)}>Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem;
