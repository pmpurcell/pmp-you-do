import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import { updateTodo, deleteTodo } from '../api/data/todoData';

export default function TodoComponent({ todo, setArray, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(todo.firebaseKey).then(setArray);
    }
    if (method === 'complete') {
      updateTodo({ ...todo, isComplete: true }).then(setArray);
    }
    // if (method === 'edit') {
    //   <TodoForm obj={todo} />;
    // }
  };
  return (
    <Alert>
      <Button type="button" color="success" onClick={() => handleClick('complete')}>complete</Button>
      <p key={todo.firebaseKey}>{todo.name}</p>
      <Button type="button" color="info" onClick={() => setEditItem(todo)}>edit</Button>
      <Button type="button" color="danger" onClick={() => handleClick('delete')}>delete</Button>
    </Alert>
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
