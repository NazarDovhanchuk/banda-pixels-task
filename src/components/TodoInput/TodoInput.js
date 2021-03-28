
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid} from 'uuid';
import { addTodo } from '../../redux/actions';

export function TodoInput () {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <header className="header">
      <h1>Tech Task</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addTodo(
            {
              id: uuid(),
              name: name,
            }
          ));
          setName('')
        }}
      >Add</button>
    </header>
  );
}