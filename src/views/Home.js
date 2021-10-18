import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

export default function Home({ array, setArray, setEditItem }) {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <TodoList array={array} setArray={setArray} setEditItem={setEditItem} />
    </div>
  );
}

Home.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArray: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
