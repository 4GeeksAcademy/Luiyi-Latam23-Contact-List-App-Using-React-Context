import React, { useEffect, useState } from 'react';
import '../../styles/home.css';
import { Contact } from '../component/Contact.jsx';

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const getcontacts = async () => {
    try {
      const response = await fetch(
        'https://playground.4geeks.com/apis/fake/contact/agenda/my-contacts-luiyi'
      );
      if (response.status !== 200) {
        throw new Error('Error, status code: ' + response.status);
      }
      const body = await response.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  const handleContacts = async () => {
    const contacts = await getcontacts();
    setContacts(contacts);
  };

  useEffect(() => {
    handleContacts();
  }, []);

  return (
    <div>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          fullName={item.full_name}
          address={item.address}
          phone={item.phone}
          email={item.email}
          imgUrl={
            'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
      ))}
    </div>
  );
};
