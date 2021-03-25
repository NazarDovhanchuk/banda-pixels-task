import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions';

export default function TodoItem({ todo }) {
  let dispatch = useDispatch()
  return (
    <div>
      <span>{todo.name}</span>
      <button
      onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}