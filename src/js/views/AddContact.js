import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container bg-light">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="fistName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="lastName"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter email"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter address"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputPhone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputPhone"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Save contact
          </button>
        </div>
      </form>
      {/* <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              <Link to={'/single/' + index}>
                <span>Link to: {item.title}</span>
              </Link>
              {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === 'orange' ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
                  </p>
                ) : null
              }
              <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, 'orange')}
              >
                Change Color1
              </button>
            </li>
          );
        })}
      </ul> */}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
