import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Contact = ({
  fullName,
  address,
  phone,
  email,
  imgUrl,
  onDelete,
  id,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleEditContactBtn = () => {
    navigate(`/update-contact/${id}`);
    console.log('You clicked me!!');
  };

  const handleDeleteContactBtn = () => {
    setShowDeleteConfirmation(true);
  };

  const updateContactList = async () => {
    try {
      const response = await fetch(
        'https://playground.4geeks.com/apis/fake/contact/agenda/luiyi-latam23-agenda',
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        const updatedContactList = await response.json();
        console.log('Updated Contact List:', updatedContactList);
      } else {
        console.error('Failed to update contact list from API');
      }
    } catch (error) {
      console.error('Error updating contact list:', error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/apis/fake/contact/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        onDelete();

        await updateContactList();

        setShowDeleteConfirmation(false);
      } else {
        console.error('Failed to delete contact from API', response.status);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  useEffect(() => {
    console.log('Effect triggered');
    const fetchInitialContactList = async () => {
      try {
        const response = await fetch(
          'https://playground.4geeks.com/apis/fake/contact/agenda/luiyi-latam23-agenda',
          {
            method: 'GET',
          }
        );

        if (response.ok) {
          const initialContactList = await response.json();
          console.log('Initial Contact List:', initialContactList);
        } else {
          console.error('Failed to fetch initial contact list from API');
        }
      } catch (error) {
        console.error('Error fetching initial contact list:', error);
      }
    };

    fetchInitialContactList();
  }, []);

  return (
    <div className="text-center mt-5">
      <div className="card mb-3 bg-light">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center ">
            <img src={imgUrl} className="cardImage" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-edit-trash-icons-container">
                <div>
                  <span className="edit-delete-icons">
                    <span className="pen-square-wrapper">
                      <i
                        className="fas fa-pen-square p-2"
                        onClick={handleEditContactBtn}
                      ></i>
                    </span>
                    <span className="trash-wrapper">
                      <i
                        className="fa fa-trash p-2"
                        onClick={handleDeleteContactBtn}
                      ></i>
                    </span>
                  </span>
                </div>
                <div>
                  <h5 className="card-title">{fullName}</h5>
                  <p className="card-text">
                    <i className="fas fa-map-marker m-1"></i>
                    {address}
                  </p>
                  <p className="card-text">
                    <i className="fa fa-phone m-1"></i>
                    {phone}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {' '}
                      <i className="fa fa-envelope m-1"></i>
                      {email}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showDeleteConfirmation} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation‼️🚨</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the contact?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
