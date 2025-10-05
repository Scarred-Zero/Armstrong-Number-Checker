import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import { useUser } from '../../../context/UserContext';

const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found or not authenticated.</div>;

  return (
    <section id='profile-page'>
      <div className="page__header">
        <div className="container">
          <div className="page__header-content">
            <ul>
              <li><Link to="/" id="breadcrumps">Home</Link></li>
              <li>/</li>
              <li>User Profile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-padding" id="armstrong-form-section">
        <div className="container">
          <div className="">
            <div className="col-lg-6">
              <h1>USER DETAILS</h1>
              <br />
              <h2>NAME: {user.name}</h2>
              <br />
              <p><strong>EMAIL: </strong>{user.email}</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-around">
            <Link to='/profile/edit'>
              <button className="btn btn-success btn-clear">
                Edit <i className="fa fa-pen-to-square ml-2"></i>
              </button>
            </Link>
            <Link to='/profile/delete'>
              <button className="btn btn-danger btn-clear">
                Delete <i className="fa fa-trash ml-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;