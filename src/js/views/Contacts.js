import React, { useEffect, useState } from 'react';
import '../../styles/home.css';
import { Contact } from '../component/Contact.jsx';

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch(
        'https://playground.4geeks.com/apis/fake/contact/agenda/luiyi-latam23-agenda'
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

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const contactsData = await getContacts();
      setContacts(contactsData);
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
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
          id={item.id}
          onDelete={() => handleDeleteContact(item.id)}
        />
      ))}
    </div>
  );
};
