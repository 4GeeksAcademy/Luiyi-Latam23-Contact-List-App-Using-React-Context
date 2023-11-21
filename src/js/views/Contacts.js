import React, { useState } from 'react';
import '../../styles/home.css';
import { Contact } from '../component/Contact.jsx';

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  return contacts.map((item) => {
    <Contact
      fullName={'Luiyi Salazar'}
      address={'555 Road Street'}
      phone={'(506) 7777-7777'}
      email={'luiyi_salazar@gmail.com'}
      imgUrl={
        'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    />;
  });
};
