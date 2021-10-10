import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import TodoComponent from '../components/TodoComponent';
import TodoForm from '../components/TodoForm';

function Initialize() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    getTodos().then(setTodo);
  }, []);

  console.warn(todos);

  return (
    <>
      <h1>Hello World!</h1>
      <TodoForm />
      {
        todos.map((todo) => <TodoComponent todo={todo} />)
      }
    </>
  );
}

export default Initialize;
