import { React, useState, useEffect } from 'react';
import { getAllTodos } from '../api/data/todoData';

export default function All() {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getAllTodos().then((todoArray) => {
      if (isMounted) setAllTodos(todoArray);
    });
    return () => {
      isMounted = false;
    };
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
