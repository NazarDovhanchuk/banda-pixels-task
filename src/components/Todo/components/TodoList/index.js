import TodoItem from '../TodoItem';

export function TodoList({ todoList }) {
  return (
    <ul>
        {todoList.map(todo => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          )
        })}
      </ul>
  );
}
