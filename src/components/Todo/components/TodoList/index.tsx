import React from 'react';
import { TodoItem } from '../TodoItem';

import "./style.scss"

interface TodoListProps {
  todoList: Array<{
    id: number,
    name: string,
    isCompleted: boolean
  }>;
}

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ul className="todoList">
      {todoList.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        )
      })}
    </ul>
  );
}

