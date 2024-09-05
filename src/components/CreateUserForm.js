import React, { useState } from 'react';
import { createUser } from '../utils/api';
import { motion } from 'framer-motion';  // Import framer-motion

const CreateUserForm = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone };
    createUser(newUser).then(user => {
      setUsers(prevUsers => [...prevUsers, user]);
      setName('');
      setEmail('');
      setPhone('');
    });
  };

  return (
    <motion.div 
      className="card mt-4 mx-auto" 
      style={{ width: '1100px' }}  // Set width of the card
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="card-header mx-auto">
        <h2>Create New User</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name here..."
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email here..."
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number here..."
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#28a745' }}
            className="btn btn-success mt-2"
            type="submit"
          >
            Create User
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateUserForm;
