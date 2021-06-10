/**function */
import {CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED} from './actions';

export const todos = (state = [], action) => {

    const { type, payload} = action;

    switch(type){
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter( (todo) => text !== todo.text);
        }
        case MARK_TODO_AS_COMPLETED: {/**2 */
            const { text } = payload;
            return state.map( (todo) => { 
                if(text === todo.text){
                    return {...todo, isCompleted: true}
                }
                return todo;
            });
        }
        default:
            return state;/**must because rduex will throw error*/
    }
}