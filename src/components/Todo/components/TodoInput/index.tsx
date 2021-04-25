
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
      <h1 className="header__title">Tech Task</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={addHandler}>Add</button>
    </header>
  );
}