import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodos } from '../api/data/todoData';

export default function TodoForm({ obj = {} }) {
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
    id: obj.id || '',
  });

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createTodos(formInput);
  };
  console.warn(setFormInput);
  return (
    <>
      <form>
        <label htmlFor="name">Name
          <input name="name" id="name" value={formInput.name} onChange={(e) => handleChange(e)} required />
        </label>
        <button type="submit" onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
