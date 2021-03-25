import {ADD_TODO, DELETE_TODO} from './actions';
import { todos } from './states';

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      return newTodos.push(action.payload);
    case DELETE_TODO:
      newTodos = [...state];
      return newTodos.filter(todo => todo.id !== action.payload)
      default:
  }
  return state;
}