
import React from 'react';
import { useState } from 'react';
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
        onChange={(event) => setName(event.target.value)}
        value={name}
      ></input>
      <button>Add</button>
    </header>
  );
}