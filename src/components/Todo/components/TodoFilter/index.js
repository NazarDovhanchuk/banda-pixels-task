import { useDispatch, useSelector } from 'react-redux';

export function TodoFilter ({ setFilter }) {

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("uncompleted")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  )
}