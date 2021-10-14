import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/todos.json?orderBy="isComplete"&equalTo=false`)
    .then((response) => resolve(Object.values(response.data || { })))
    .catch(reject);
});

const createTodos = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseUrl}/todos/${response.data.name}.json`,
          { firebaseKey })
        .then(() => {
          getTodos().then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/todos/${firebaseKey}.json`)
    .then(() => getTodos().then(resolve))
    .catch(reject);
});

const updateTodo = (todoObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/todos/${todoObj.firebaseKey}.json`, todoObj)
    .then(() => getTodos().then(resolve))
    .catch(reject);
});

export {
  getTodos,
  createTodos,
  deleteTodo,
  updateTodo,
};
