import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../../../context/UserContext';
import { useAuth } from '../../../../context/AuthContext';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const { user, loading } = useUser();
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || '');
  const [error, setError] = useState(location.state?.error || '');
  const [showModal, setShowModal] = useState(false);
  const apiUserUrlPrefix = import.meta.env.VITE_API_USER_URL_PREFIX;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 1500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 1500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${apiUserUrlPrefix}/profile/delete/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      logout();
      navigate('/secure/sign-in', { state: { message: 'Profile deleted successfully!' } });
    } catch (err) {
      console.error('Profile deletion failed:', err);
      navigate('/user/profile', { state: { error: 'Profile deletion failed.' } });
    }
  };

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

      <br />
      {error
        ? <div className='alert alert-danger'>{error}</div>
        : message && <div className="alert alert-success">{message}</div>
      }


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
              <button
                className="btn btn__danger btn__clear"
                id='delete'
                onClick={() => setShowModal(true)}
              >
                Delete <i className="fa fa-trash ml-2"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Are you sure you want to delete your profile?</h4>
            <div className="modal-actions">
              <button
                className="btn btn__danger btn__clear"
                onClick={(e) => {
                  setShowModal(false);
                  handleDelete(e);
                }}
              >
                Yes, Delete
              </button>
              <button
                className="btn btn__clear"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;