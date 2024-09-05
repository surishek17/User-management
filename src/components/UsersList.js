import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For smooth animations

const UsersList = ({ users, handleDelete }) => {
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
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
              <Link to={`/users/${user.id}`} className="btn btn-primary btn-sm">
                Edit
              </Link>
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
  );
};

export default UsersList;
