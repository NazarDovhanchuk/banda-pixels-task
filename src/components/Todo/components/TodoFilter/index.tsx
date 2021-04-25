import React from "react";

interface TodoFilterProps {
  setFilter: Function,
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("uncompleted")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  )
}
