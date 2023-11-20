import React from 'react';
import '../../styles/home.css';

export const Contact = () => (
  <div>
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
              <h5 className="card-title">
                Name Last Name <i className="fas fa-pen-square"></i>
              </h5>
              <p className="card-text">5555 Road Street</p>
              <p className="card-text">(506) 7777-7777</p>
              <p className="card-text">
                <small className="text-muted">test@mail.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <h5 className="card-title">Name Last Name</h5>
              <p className="card-text">5555 Road Street</p>
              <p className="card-text">(506) 7777-7777</p>
              <p className="card-text">
                <small className="text-muted">test@mail.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
