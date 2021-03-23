
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Header({ addTodo }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <header className="header">
      <h1>Tech Task</h1>

      <form onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="Які справи на сьогодні?"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </header>
  );
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

Header.propTypes = { addTodo: PropTypes.func.isRequired };


export default Header;