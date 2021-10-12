import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodos } from '../api/data/todoData';

export default function TodoForm({ obj = {}, setArray }) {
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
  });

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createTodos(formInput).then(setArray);
  };
  console.warn(setFormInput);
  return (
    <>
      <form>
        <label htmlFor="name">Name
          <input name="name" id="name" value={formInput.name} onChange={handleChange} required />
        </label>
        <button type="submit" onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  setArray: PropTypes.func.isRequired,
};
