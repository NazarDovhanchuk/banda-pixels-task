import Header from './components/Header/Header';
import { useState } from 'react';
import { TodoList } from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = value => setTodos(
    [
      ...todos,
      {
        id: Date.now(),
        title: value,
        completed: false,
        filter: 'All',
      },
    ],
  );

  let allTodos = [];

  switch (filter) {
    case 'Active':
      allTodos = todos.filter(todo => todo.completed === false);
      break;
    case 'Completed':
      allTodos = todos.filter(todo => todo.completed === true);
      break;
    default:
      allTodos = todos;
      break;
  }
  
  return (
    <>
      <Header addTodo={addTodo} />
      <TodoList todos={allTodos} />
    </>
  );
}

export default App;
