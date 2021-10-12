import React from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';

export default function TodoList({ array, setArray }) {
  return (
    <div>
      {array.map((todo) => (
        <TodoComponent key={todo.name} todo={todo} setArray={setArray} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  array: PropTypes.arrayOf.isRequired,
  setArray: PropTypes.func.isRequired,
};
