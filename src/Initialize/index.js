import React, { useEffect, useState } from 'react';
import getTodos from '../api/data/todoData';

function Initialize() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodos().then(setTodo);
  }, []);

  console.warn(todo);

  return (
    <>
      <h1>Hello World!</h1>
      {
        todo.map((item) => <h3 key={item.name}>{item.name}</h3>)
      }
    </>
  );
}

export default Initialize;
