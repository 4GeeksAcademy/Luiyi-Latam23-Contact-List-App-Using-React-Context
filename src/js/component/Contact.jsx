import React from 'react';

export const Contact = () => {
  return (
    <div className="text-center mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="cardImage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-edit-trash-icons-container">
                <div>
                  <span className="edit-delete-icons">
                    <i className="fas fa-pen-square p-2"></i>
                    <i className="fa fa-trash p-2"></i>
                  </span>
                </div>
                <div>
                  <h5 className="card-title">Name Last Name</h5>
                  <p className="card-text">
                    <i className="fas fa-map-marker m-1"></i>
                    5555 Road Street
                  </p>
                  <p className="card-text">
                    <i className="fa fa-phone m-1"></i>(506) 7777-7777
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {' '}
                      <i className="fa fa-envelope m-1"></i>test@mail.com
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
