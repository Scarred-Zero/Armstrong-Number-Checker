import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import { useUser } from '../../../../context/UserContext';

const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

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
        {!user ? (
          <div className="user__container">
            <div className="user__content error">
              <h2>Error Code: <em>ERR_BAD_RESPONSE</em></h2>
              <h2>Status Code: <em>500</em></h2>
              <h2>Error Type: <em>Internal Server Error</em></h2>
              <p>An error occurred while fetching User details. Try refreshing the page.</p>
            </div>
          </div>
        ) : (
          <div className="user__container">
            <div className="user__content">
              <h3>Name: {user.name}</h3>
              <p><strong>Email: </strong>{user.email}</p>
            </div>
            <hr />
            <div className="user__content_2">
              <Link to='/user/profile/edit'>
                <button className="btn btn__success btn__clear">
                  Edit <i className="fa fa-pen-to-square ml-2"></i>
                </button>
              </Link>
              <Link to='/user/profile/delete'>
                <button className="btn btn__danger btn__clear">
                  Delete <i className="fa fa-trash ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserProfile;