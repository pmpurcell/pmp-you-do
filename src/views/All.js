import { React, useState, useEffect } from 'react';
import { getAllTodos } from '../api/data/todoData';

export default function All() {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    getAllTodos().then(setAllTodos);
  }, []);
  return (
    <div>
      {allTodos.map((todo) => (
        <div
          className="d-flex justify-content-between alert alert-light"
          role="alert"
          key={todo.firebaseKey}
        >
          {todo.name}
          <button
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
