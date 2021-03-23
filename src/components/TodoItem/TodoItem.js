import React, { useContext } from 'react';

export function TodoItem({ todo }) {
  const { title, id } = todo;

  return (
    <li key={id}>{title}</li>
  );
}