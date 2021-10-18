import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getTodos = (value) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/todos.json?orderBy="isComplete"&equalTo=${value}`)
    .then((response) => resolve(Object.values(response.data || {})))
    .catch(reject);
});

const getCompletedTodos = () => new Promise((resolve, reject) => {
  getTodos(true).then(resolve).catch(reject);
});

const getAllTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/todos.json`)
    .then((response) => resolve(Object.values(response.data || {})))
    .catch(reject);
});

const createTodos = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseUrl}/todos/${response.data.name}.json`, { firebaseKey })
        .then(() => {
          getTodos(false).then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseUrl}/todos/${firebaseKey}.json`)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

const deleteCompleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseUrl}/todos/${firebaseKey}.json`)
    .then(() => getCompletedTodos().then(resolve))
    .catch(reject);
});

const updateTodo = (todoObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseUrl}/todos/${todoObj.firebaseKey}.json`, todoObj)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

export {
  getTodos,
  createTodos,
  deleteTodo,
  updateTodo,
  getCompletedTodos,
  deleteCompleteTodo,
  getAllTodos,
};
