import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

export function Todo() {
  let todos = useSelector(state => state);
  let [todoList, setTodoList] = useState(todos);
  let [ filter, setFilter ] = useState("all");

  useEffect(() => {
      let sortTodo = [];
      if(filter === "all") {
        sortTodo = todos;
      }

      if(filter === "completed") {
        sortTodo = todos.filter(todo => todo.isCompleted);
      }

      if(filter === "uncompleted") {
        sortTodo = todos.filter(todo => !todo.isCompleted)
      }

      setTodoList(sortTodo)
  }, [filter, todos])

  return (
    <div>
      <TodoInput />
      <TodoList todoList={todoList} />
      <TodoFilter setFilter={setFilter} />
    </div>
  );
}
