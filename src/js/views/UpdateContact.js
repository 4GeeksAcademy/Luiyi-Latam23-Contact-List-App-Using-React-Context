import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  const params = useParams();
  console.log(params);

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
          setContactDetails(contact);
        } else {
          console.error('Failed to fetch contact details from API');
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchContactDetails();
  }, [params.id]);

  const handleFormSubmit = (e) => {
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

    const newContact = {
      fullName: `${contactDetails.firstName} ${contactDetails.lastName}`,
      address: contactDetails.address,
      email: contactDetails.email,
      phone: contactDetails.phone,
      imgUrl:
        'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200',
    };

    console.log('Saving contact:', newContact);
    actions.addContact(newContact);
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
            value={contactDetails ? contactDetails.firstName : ''}
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
            value={contactDetails ? contactDetails.lastName : ''}
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
            id="inputEmail4"
            value={contactDetails ? contactDetails.email : ''}
            placeholder="Enter email"
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
            id="inputAddress"
            value={contactDetails ? contactDetails.address : ''}
            placeholder="Enter address"
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
