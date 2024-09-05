const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => fetch(API_BASE_URL).then(res => res.json());

export const createUser = (user) => fetch(API_BASE_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
}).then(res => res.json());

export const updateUser = (id, user) => fetch(`${API_BASE_URL}/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
}).then(res => res.json());

export const deleteUser = (id) => fetch(`${API_BASE_URL}/${id}`, {
  method: 'DELETE',
}).then(res => res.json());
