import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-3">
      <Link to="/">
        <span className="navbar-brand text-white mb-0 h1">Contact List 📋</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-success">ADD NEW CONTACT +</button>
        </Link>
      </div>
    </nav>
  );
};
