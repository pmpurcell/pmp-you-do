import React from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';

export default function TodoList({ array, setArray, setEditItem }) {
  return (
    <div>
      {array.map((todo) => (
        <TodoComponent key={todo.firebaseKey} todo={todo} setArray={setArray} setEditItem={setEditItem} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArray: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
