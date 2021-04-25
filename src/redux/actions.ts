export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(todo: { id: string; name: string; isCompleted: boolean; }) {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function deleteTodo(todoId: number) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  }
}

export function toggleTodo(todoId: number) {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  }
};
