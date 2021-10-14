import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Initialize() {
  const [todos, setTodo] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodo);
  }, []);

  const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
  color: white
  }
  `;

  return (
    <BodyStyle>
      <h1>You-Do!</h1>
      <TodoForm obj={editItem} setArray={setTodo} setEditItem={setEditItem} />
      <TodoList array={todos} setArray={setTodo} setEditItem={setEditItem} />
    </BodyStyle>
  );
}

export default Initialize;
