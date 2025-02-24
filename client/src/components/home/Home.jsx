import React from 'react';
import ArmstrongChecker from './ArmstrongChecker';
import './Home.css';

const Home = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

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
