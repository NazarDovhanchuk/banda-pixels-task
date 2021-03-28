import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

export function TodoList() {
  let todos = useSelector(state => state);
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        )
      })}
    </div>
  );
}
