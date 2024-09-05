import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../utils/api';
import UpdateUserForm from './UpdateUserForm';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(users => {
      const selectedUser = users.find(u => u.id === parseInt(id));
      setUser(selectedUser);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>

      <UpdateUserForm userId={id} setUsers={setUser} />
    </div>
  );
};

export default UserDetails;
