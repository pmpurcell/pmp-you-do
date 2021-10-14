import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Initialize() {
  const [todos, setTodo] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodo);
  }, []);

  return (
    <>
      <h1>You-Do!</h1>
      <p>Do the thing!</p>
      <TodoForm obj={editItem} setArray={setTodo} setEditItem={setEditItem} />
      <TodoList array={todos} setArray={setTodo} setEditItem={setEditItem} />
    </>
  );
}

export default Initialize;
