export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';/**action type *//**1 */
export const markTodoAsCompleted = text => ({/**action creator */
    type: MARK_TODO_AS_COMPLETED,
    payload: {text},
});