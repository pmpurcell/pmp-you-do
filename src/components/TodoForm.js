import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { createTodos, updateTodo } from '../api/data/todoData';

const initialState = {
  name: '',
  isComplete: false,
  uid: '',
};

export default function TodoForm({ obj = {}, setArray, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        isComplete: obj.isComplete,
        uid: obj.uid,
      });
    }
    // DEPENDENCY ARRAY WATCHES FOR obj TO CHANGE
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
    setEditItem({});
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateTodo(formInput).then((todo) => {
        setArray(todo);
        resetForm();
      });
    } else {
      createTodos(formInput).then((todo) => {
        setArray(todo);
        resetForm();
      });
    }
  };

  return (
    <>
      <form id="todoForm">
        <label htmlFor="name">
          <input name="name" id="name" value={formInput.name} onChange={handleChange} required />
        </label>
        <Button type="submit" color="success" onClick={(e) => handleClick(e)}>{obj.firebaseKey ? 'UPDATE' : 'SUBMIT'}</Button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    isComplete: PropTypes.bool,
  }),
  setArray: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: { },
};
