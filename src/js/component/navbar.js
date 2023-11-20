import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-3 mt-3 p-3">
      <Link to="/">
        <span className="navbar-brand text-white h1 custom-navbar-brand">
          Contact List<i className="far fa-address-book"></i>
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-success">ADD NEW CONTACT +</button>
        </Link>
      </div>
    </nav>
  );
};
