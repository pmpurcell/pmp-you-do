import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { updateTodo, deleteTodo } from '../api/data/todoData';

const TodoStyle = styled.div`
background-color: white;
display: flex;
justify-content: space-around;
width: 600px;
margin: 10px;
padding:10px;
#delete {
  justify-self: end;
}
`;

export default function TodoComponent({ todo, setArray, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(todo.firebaseKey).then(setArray);
    }
    if (method === 'complete') {
      updateTodo({ ...todo, isComplete: true }).then(setArray);
    }
  };
  return (
    <TodoStyle>
      <Button type="button" color="success" id="complete" onClick={() => handleClick('complete')}>Complete</Button>
      <p key={todo.firebaseKey}>{todo.name}</p>
      <Button type="button" color="info" id="edit" onClick={() => setEditItem(todo)}>EDIT</Button>
      <Button type="button" color="danger" class="delete" onClick={() => handleClick('delete')}>DELETE</Button>
    </TodoStyle>
  );
}

TodoComponent.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setArray: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
