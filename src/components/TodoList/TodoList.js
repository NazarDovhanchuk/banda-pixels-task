import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

export function TodoList() {
  let todos = useSelector(state => state);

  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          )
        })}
      </ul>
    </div>
  );
}
