import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Completed from '../views/Completed';
import Home from '../views/Home';
import All from '../views/All';

export default function Routes({ array, setArray, setEditItem }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home array={array} setArray={setArray} setEditItem={setEditItem} />} />
        <Route exact path="/completed" component={Completed} />
        <Route exact path="/all" component={All} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArray: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
