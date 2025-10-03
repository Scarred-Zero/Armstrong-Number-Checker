import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const apiUserUrlPrefix = import.meta.env.VITE_API_USER_URL_PREFIX;


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${apiUserUrlPrefix}/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(res.data.data);
      } catch (error) {
        setError(error.response?.data?.message || "User not found.");
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <section id='profile-page'>
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="page-header-content">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item">/</li>
                  <li className="list-inline-item">User Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding" id="armstrong-form-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <h1>USER DETAILS</h1>
              <br />
              <h2>NAME: {user.name}</h2>
              <br />
              <p><strong>EMAIL: </strong>{user.email}</p>
              <br />
              <p><strong>USERNAME: </strong>{user.username}</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-around">
            <Link to={`/profile/edit`}>
              <button className="btn btn-success btn-clear">
                Edit <i className="fa fa-pen-to-square ml-2"></i>
              </button>
            </Link>
            <Link to={`/profile/delete`}>
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
