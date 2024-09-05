import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../utils/api';
import { Link } from 'react-router-dom';
import CreateUserForm from '../components/CreateUserForm';
import Spinner from '../components/Spinner';
import { motion } from 'framer-motion';  // Import framer-motion

const HomeView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  // Animation variants
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <h1>User Management</h1>
      {loading ? <Spinner /> : (
        <motion.table className="table table-striped" variants={listVariants}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <motion.tbody>
            {users.map(user => (
              <motion.tr key={user.id} variants={itemVariants}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-primary btn-sm">Edit</Link>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#e74c3c' }}
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      )}
      <CreateUserForm setUsers={setUsers} />
    </motion.div>
  );
};

export default HomeView;
