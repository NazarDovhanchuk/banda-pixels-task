import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './actions';
import { todos } from './states';

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      return newTodos.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      newTodos = [...state];
      return newTodos.map((todo) => {
        if(todo.id === action.payload) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      } return {...todo}
      })
      default:
  }
  return state;
}