import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  const [isEditMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim()
    ) {
      console.log('Please fill in all the fields.');
      return;
    }

    const newContact = {
      full_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      // imgUrl:
      //   'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200',
      agenda_slug: 'luiyi-latam23-agenda',
    };

    console.log('Saving contact:', newContact);

    try {
      let updatedContacts;

      if (store.contacts.length === 0) {
        const response = await fetch(
          'https://playground.4geeks.com/apis/fake/contact/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
          }
        );

        if (!response.ok) {
          throw new Error('Error adding new contact');
        }

        updatedContacts = await response.json();
      } else {
        const response = await fetch(
          'https://playground.4geeks.com/apis/fake/contact/agenda/luiyi-latam23-agenda',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
          }
        );
        if (!response.ok) {
          throw new Error('Error updating contact');
        }
        const contactsData = await getContacts();
        updatedContacts = contactsData;
      }

      setContacts(updatedContacts);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = async () => {
    try {
      const response = await fetch(
        'https://playground.4geeks.com/apis/fake/contact/agenda/luiyi-latam23-agenda'
      );

      if (!response.ok) {
        throw new Error('Error fetching contacts');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
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
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
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
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
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
            placeholder="Enter email"
            id="inputEmail4"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
            placeholder="Enter address"
            id="inputAddress"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
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
        <button className="btn btn-link">Back to Contact List</button>
      </Link>
    </div>
  );
};
