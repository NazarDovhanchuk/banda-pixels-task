import { useDispatch } from 'react-redux';
import { Checkbox, IconButton, ListItem, ListItemText } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import cx from "classnames";

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
  const { isCompleted } = todo;
  let dispatch = useDispatch();
  const deleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleHandler = () => dispatch(toggleTodo(todo.id));
  return (
    <div>
      <ListItem>
        <Checkbox
          checked={isCompleted}
          onChange={toggleHandler}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <ListItemText primary={todo.name} className={cx(
          "todo__item",
          todo && todo.isCompleted && "todo__item-completed"
        )} />
        <IconButton aria-label="delete" onClick={deleteHandler} color="secondary">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div >
  );
}
