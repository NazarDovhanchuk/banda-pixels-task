import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';
import { todos } from './states';

export const todo = (state = todos, action: { type: any; payload: string; }) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return [...state].filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      newTodos = [...state];
      return newTodos.map(todo => {
        return (todo.id === action.payload)
          ? {
            ...todo,
            isCompleted: !todo.isCompleted
          }
          : {
            ...todo
          }
      })
    default:
  }
  return state;
}