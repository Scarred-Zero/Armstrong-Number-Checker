import React, { useState, useEffect } from 'react';
import ArmstrongChecker from './ArmstrongChecker';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message || '');
  const [error, setError] = useState(location.state?.error || '');

  // clear history state so message does not reappear on refresh
  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 6000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section id='home'>
      <div className="banner">
        <div className="container">
          <div className="banner__content center__heading">
            <h1>Armstrong Number Checker </h1>
            <p>
              This web application provides a user-friendly interface to input a range and find all Armstrong numbers within that range or a number to check for Armstrong Number.
            </p>
          </div>
        </div>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>

      <ArmstrongChecker />

      <div className="about__section">
        <div className="container">
          <div className="about__section-content grid">

            <div className="about__section-content-item">
              <div className="about__img"></div>
            </div>

            <div className="about__section-content-item">
              <div className="about__section-title">
                <span className="subheading">Welcome</span>
                <h3>The Armstrong Number Checker</h3>
              </div>
              <p>
                The Armstrong Number Checker is a simple web application designed to determine whether a given positive integer is an Armstrong number. An Armstrong number (also known as a narcissistic number or a pluperfect digital invariant) is a number that is equal to the sum of its own digits raised to the power of the number of digits. For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. <br />

                <br />This web application provides a user-friendly interface to input a range and find all Armstrong numbers within that range or a number to check for Armstrong Number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
