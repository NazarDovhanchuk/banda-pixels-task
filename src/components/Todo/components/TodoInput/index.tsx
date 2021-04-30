
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@material-ui/core/';
import { v1 as uuid } from 'uuid';

import { addTodo } from '../../../../redux/actions';

import "./style.scss";

export const TodoInput: React.FC = () => {
  let [name, setName] = useState('');
  let dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addTodo(
      {
        id: uuid(),
        name: name,
        isCompleted: false,
      }
    ));
    setName('')
  }
  return (
    <header className="header">
      <h1 className="header__title">TodoApp</h1>
      <div className="header__input">
        <Input
          placeholder="Enter your task"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          inputProps={{
            "aria-label": "Description"
          }}
          style={{ width: "100%" }}
        />
        <Button
          onClick={addHandler}
          variant="contained"
          color="primary"
          style={{ width: "10%" }}
        >Add
      </Button>
      </div>
    </header>
  );
}