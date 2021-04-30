import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core/';

import { TodoItem } from '../TodoItem';
import { VISIBILITY_FILTERS } from "../../../../constans";
interface AllTodos {
  todo: Array<{
    id: number,
    name: string,
    isCompleted: boolean
  }>,
}
interface VisibilityFilter {
  visibilityFilter: Array<{
    id: number,
    name: string,
    isCompleted: boolean
  }>;
}

export const TodoList: React.FC = () => {
  let visibilityFilter: any = useSelector<VisibilityFilter>(state => state.visibilityFilter);
  const allTodos: any = useSelector<AllTodos>(state => state.todo);
  let [todoList, setTodoList] = useState(allTodos);

  useEffect(() => {
    let sortTodo: any = [];
    if (visibilityFilter === VISIBILITY_FILTERS.ALL) {
      sortTodo = allTodos;
    }

    if (visibilityFilter === VISIBILITY_FILTERS.COMPLETED) {
      sortTodo = allTodos.filter((todo: { isCompleted: boolean; }) => todo.isCompleted);
    }

    if (visibilityFilter === VISIBILITY_FILTERS.INCOMPLETE) {
      sortTodo = allTodos.filter((todo: { isCompleted: boolean; }) => !todo.isCompleted)
    }

    setTodoList(sortTodo)
  }, [allTodos, visibilityFilter])

  return (
    <div>
      <List>
        {todoList.map((todo: { id: any; name: string; isCompleted: boolean; }) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </List>
    </div>
  )
}

