import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Initialize() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    getTodos().then(setTodo);
  }, []);

  console.warn(todos);

  return (
    <>
      <h1>Hello World!</h1>
      <TodoForm setArray={setTodo} />
      <TodoList array={todos} setArray={setTodo} />
    </>
  );
}

export default Initialize;
