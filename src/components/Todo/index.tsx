import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

import "./style.scss";

export const Todo: React.FC = () => {
  let todos: any = useSelector(state => state);
  let [todoList, setTodoList] = useState(todos);
  let [filter, setFilter] = useState("all");

  useEffect(() => {
    let sortTodo: any = [];
    if (filter === "all") {
      sortTodo = todos;
    }

    if (filter === "completed") {
      sortTodo = todos.filter((todo: { isCompleted: boolean; }) => todo.isCompleted);
    }

    if (filter === "uncompleted") {
      sortTodo = todos.filter((todo: { isCompleted: boolean; }) => !todo.isCompleted)
    }

    setTodoList(sortTodo)
  }, [filter, todos])

  return (
    <section className="todo">
      <TodoInput />
      <TodoList todoList={todoList} />
      <TodoFilter setFilter={setFilter} />
    </section>
  );
}
