import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import UserDetailView from './views/UserDetailView';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">User Management</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/users/:id" element={<UserDetailView />} />
      </Routes>
    </div>
  );
}

export default App;
