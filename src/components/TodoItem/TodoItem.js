import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/actions';

export default function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const deleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleHandler = () => dispatch(toggleTodo(todo.id));
  return (
    <div>
      <li>
        <input type="checkbox" onClick={toggleHandler}></input>
        {todo.isCompleted ? "" : "Done"}
        <span>{todo.name}</span>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </div>
  );
}