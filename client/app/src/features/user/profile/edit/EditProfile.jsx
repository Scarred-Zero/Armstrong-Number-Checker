import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../../../context/UserContext';
import "./EditProfile.css"


const EditProfile = () => {
  const { user, refreshUser, loading } = useUser();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const errorRef = useRef();
  const navigate = useNavigate();
  const apiUserUrlPrefix = import.meta.env.VITE_API_USER_URL_PREFIX;

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name || '', email: user.email || '' });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.patch(
        `${apiUserUrlPrefix}/profile/edit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      refreshUser();
      navigate('/user/profile', { state: { message: 'Profile updated successfully!' } });
    } catch (err) {
      setError(err.response?.data?.message || 'Profile update failed.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 10000);
      return () => clearTimeout(timer)
    }
  }, [error]);

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.scrollBy({
          top: -150, left: 0, behavior: 'smooth'
        });
      }, 400);
    }
  }, [error]);


  return (
    <section id='profile-page'>
      <div className="page__header">
        <div className="container">
          <div className="page__header-content">
            <ul>
              <li><Link to="/" id="breadcrumps">Home</Link></li>
              <li>/</li>
              <li>Edit User Profile</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      {message && <div className="alert alert-success">{message}</div>}
      {error && (
        <div ref={errorRef} className="alert alert-danger">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="auth__form" method="POST">
        <div className="auth__form-container">
          <div className="form__group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" className="form__input" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='John Doe' />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form__input" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='example@gmail.com' />
          </div>
        </div>
        <button variant="contained" type="submit" className="submit_btn btn">
          {isLoading ? "Please wait..." : "Save"}
        </button>
      </form>

    </section >
  );
};


export default EditProfile
