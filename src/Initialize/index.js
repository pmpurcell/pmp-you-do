import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getTodos } from '../api/data/todoData';
import Navigation from '../components/Navigation';
import TodoForm from '../components/TodoForm';

import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [todos, setTodo] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState(null);

  // Broilerplate Auth Code Block
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoUrl,
          uid: authed.uid,
          user: authed.email.split('@'),
        };
        setUser(userInfoObj);
        getTodos(false).then(setTodo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  const BodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: white;
    }
  `;

  return (
    <BodyStyle>
      {user ? (
        <>
          <Navigation />
          <h1>You-Do!</h1>
          <Routes array={todos} setArray={setTodo} setEditItem={setEditItem} />
          <TodoForm
            obj={editItem}
            setArray={setTodo}
            setEditItem={setEditItem}
          />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </BodyStyle>
  );
}

export default Initialize;
