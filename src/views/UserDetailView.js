import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../utils/api';
import { motion } from 'framer-motion';

const UserDetailView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(users => {
      const userData = users.find(user => user.id === parseInt(id));
      setUser(userData);
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(user.id, user).then(updatedUser => {
      setUser(updatedUser);
    });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleUpdate}>
        <h2>Edit User</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#3498db' }}
          className="btn btn-primary"
          type="submit"
        >
          Update User
        </motion.button>
      </form>
    </motion.div>
  );
};

export default UserDetailView;
