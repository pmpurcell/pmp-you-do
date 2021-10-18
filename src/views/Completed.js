import { React, useState, useEffect } from 'react';
import { deleteCompleteTodo, getCompletedTodos } from '../api/data/todoData';

export default function Completed() {
  const [completeTodos, setCompleteTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getCompletedTodos().then((todoArray) => {
      if (isMounted) setCompleteTodos(todoArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (key) => {
    deleteCompleteTodo(key).then(setCompleteTodos);
  };

  return (
    <div>
      <h1>Welcome to Completed!</h1>
      <div>
        {completeTodos.map((todo) => (
          <div
            className="d-flex justify-content-between alert alert-light"
            role="alert"
            key={todo.firebaseKey}
          >
            {todo.name}
            <button
              onClick={() => handleClick(todo.firebaseKey)}
              className="btn btn-danger"
              type="button"
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
