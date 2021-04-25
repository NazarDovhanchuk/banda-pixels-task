import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../../../redux/actions';

import "./style.scss";

interface TodoItemProps {
  todo: {
    id: number,
    name: string,
    isCompleted: boolean
  }
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  let { isCompleted } = todo;
  let dispatch = useDispatch();
  const deleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleHandler = () => dispatch(toggleTodo(todo.id));
  return (
    <div>
      <li className="todoItem">
        <input type="checkbox" checked={isCompleted} onChange={toggleHandler}></input>
        {todo && todo.isCompleted ? "👌" : "👋"}
        <span>{todo.name}</span>
        <button onChange={deleteHandler}>Delete</button>
      </li>
    </div>
  );
}
