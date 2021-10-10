import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';

export default function TodoComponent({ todo }) {
  return (
    <Alert>
      <Button type="button" color="success">complete</Button>
      {todo.name}
      <Button type="button" color="danger">delete</Button>
    </Alert>
  );
}

TodoComponent.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
