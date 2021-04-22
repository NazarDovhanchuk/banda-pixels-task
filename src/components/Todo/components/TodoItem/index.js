import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../../../redux/actions';

export default function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const deleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleHandler = () => dispatch(toggleTodo(todo.id));
  return (
    <div>
      <li>
        <input type="checkbox" checked={todo.isCompleted} onClick={toggleHandler}></input>
        {todo && todo.isCompleted ? "👌" : "👋"}
        <span>{todo.name}</span>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </div>
  );
}