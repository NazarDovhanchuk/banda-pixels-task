import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

import "./style.scss";

export const Todo: React.FC = () => {
  return (
    <section className="todo">
      <TodoInput />
      <TodoList />
      <TodoFilter />
    </section>
  );
}
