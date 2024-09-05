import React, { useState, useEffect } from 'react';
import { updateUser, fetchUsers } from '../utils/api';
import { motion } from 'framer-motion'; // For animations

const UpdateUserForm = ({ userId, setUsers }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(users => {
      const foundUser = users.find(u => u.id === parseInt(userId));
      setUser(foundUser);
      setLoading(false);
    });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, user).then(updatedUser => {
      setUsers(prevUsers => 
        prevUsers.map(u => (u.id === updatedUser.id ? updatedUser : u))
      );
      alert('User updated successfully!');
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <h2>Edit User</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#3498db' }}
        className="btn btn-primary"
        type="submit"
      >
        Update User
      </motion.button>
    </motion.form>
  );
};

export default UpdateUserForm;
