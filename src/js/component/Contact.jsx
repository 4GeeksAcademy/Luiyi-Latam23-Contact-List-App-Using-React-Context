import React, { useState } from 'react';

export const Contact = ({
  fullName,
  address,
  phone,
  email,
  imgUrl,
  onDelete,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleEditContactBtn = () => {
    console.log('You clicked me!!');
  };

  const handleDeleteContactBtn = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="text-center mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={imgUrl} className="cardImage" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-edit-trash-icons-container">
                <div>
                  <span className="edit-delete-icons">
                    <i
                      className="fas fa-pen-square p-2"
                      onClick={handleEditContactBtn}
                    ></i>
                    <i
                      className="fa fa-trash p-2"
                      onClick={handleDeleteContactBtn}
                    ></i>
                  </span>
                </div>
                {showDeleteConfirmation && (
                  <div className="delete-confirmation-box">
                    <h3>Are you sure you want to delete the contact?</h3>
                    <button
                      className="btn btn-danger"
                      onClick={handleConfirmDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancelDelete}
                    >
                      No
                    </button>
                  </div>
                )}
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
    </div>
  );
};
