import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/demo.css';

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/${id}`,
          {
            method: 'GET',
          }
        );

        if (response.ok) {
          const contact = await response.json();
          const [firstName, lastName] = contact.full_name.split(' ');
          const newContact = { ...contact, firstName, lastName };
          setContactDetails(newContact);
        } else {
          console.error('Failed to fetch contact details from API');
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    if (id) {
      fetchContactDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !contactDetails ||
      !contactDetails.firstName ||
      !contactDetails.lastName ||
      !contactDetails.email ||
      !contactDetails.address ||
      !contactDetails.phone
    ) {
      console.log('Please fill in all the fields.');
      return;
    }

    const updatedContact = {
      full_name: `${contactDetails.firstName} ${contactDetails.lastName}`,
      address: contactDetails.address,
      email: contactDetails.email,
      phone: contactDetails.phone,
      // imgUrl:
      //   'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200',
      agenda_slug: 'luiyi-latam23-agenda',
    };

    console.log('Saving updated contact:', updatedContact);

    try {
      if (id) {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
          }
        );

        if (response.ok) {
          console.log('Contact updated successfully!');
        } else {
          console.error('Error updating contact:', response.statusText);
        }
      } else {
        const response = await fetch(
          'https://playground.4geeks.com/apis/fake/contact/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
          }
        );

        if (response.ok) {
          console.log('Contact added successfully!');
        } else {
          console.error('Error adding new contact:', response.statusText);
        }
      }

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <div className="container bg-light">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstName"
            value={contactDetails ? contactDetails.firstName : ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="lastName"
            value={contactDetails ? contactDetails.lastName : ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={contactDetails ? contactDetails.email : ''}
            placeholder="Enter email"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={contactDetails ? contactDetails.address : ''}
            placeholder="Enter address"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={contactDetails ? contactDetails.phone : ''}
            placeholder="Enter your phone number"
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

      <Link to="/">
        <button className="btn btn-link">Back to Contact List</button>
      </Link>
    </div>
  );
};
