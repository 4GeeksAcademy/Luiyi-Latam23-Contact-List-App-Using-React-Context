import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberInput = (e) => {
    setPhone(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !address || !phone) {
      console.log('Please fill in all the fields.');
      return;
    }

    const newContact = {
      fullName: `${firstName} ${lastName}`,
      address,
      email,
      phone,
      imgUrl:
        'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200',
    };

    console.log('Saving contact:', newContact);
    actions.addContact(newContact);
  };

  return (
    <div className="container bg-light">
      <form className="row g-3" onSubmit={handleFormSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstName"
            onChange={handleFirstNameInput}
            required
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
            onChange={handleLastNameInput}
            required
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
            onChange={handleEmailInput}
            required
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
            onChange={handleAddressInput}
            required
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
            onChange={handlePhoneNumberInput}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Save contact
          </button>
        </div>
      </form>
      {/* {
        <ul className="list-group">
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
        </ul>
      }
      <br /> */}
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
